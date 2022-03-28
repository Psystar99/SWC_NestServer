import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  // beforeAll: 새로운 테스트를 진행할 때마다 새로운 어플리케이션 생성 x. 기존 것으로 그대로
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      // 사용하고 싶은 파이프를 NestJS 애플리케이션에 넘겨준다.
      new ValidationPipe({ // 유효성 검사 해줌
        whitelist: true, // true 설정하면, 데코레이터가 없는 property의 object를 걸러줌.
        forbidNonWhitelisted: true,// 누군가 이상한 걸 보내면, 리퀘스트 자체를 막아버림 
        transform: true, // 클라이언트가 보낸 데이터를 우리가 원하는 실제 타입으로 변환해줌(ex. str -> int)
      }) 
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to movie API');
  });

  describe('/movie', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/movie')
        .expect(200)
        .expect([]);
    });
    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movie')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
        })
        .expect(201);
    });
    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movie')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
          other: 'thing',
        })
        .expect(400);
    });
    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movie')
        .expect(404);
    });
  });

  describe('/movie/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer())
        .get('/movie/1')
        .expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer())
        .get('/movie/999')
        .expect(404);
    });
    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/movie/1')
        .send({ title: 'Updated Test' })
        .expect(200);
    });
    it('DELETE 200', () => {
      return request(app.getHttpServer())
        .delete('/movie/1')
        .expect(200);
    });
  });

});
