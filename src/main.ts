//NestJS 애플리케이션이 시작하는 파일
// 오직 하나. 우리가 하는 모든 것을 import.

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 모듈은 NestJS가 우리의 app을 만들기 위해 이용하는 것.
  // 클래스 유효성 검사용 파이프. 일반적으로 express애서 파이프는 미들웨어 같은 것. 
  app.useGlobalPipes(
    // 사용하고 싶은 파이프를 NestJS 애플리케이션에 넘겨준다.
    new ValidationPipe({ // 유효성 검사 해줌
      whitelist: true, // true 설정하면, 데코레이터가 없는 property의 object를 걸러줌.
      forbidNonWhitelisted: true,// 누군가 이상한 걸 보내면, 리퀘스트 자체를 막아버림 
      transform: true, // 클라이언트가 보낸 데이터를 우리가 원하는 실제 타입으로 변환해줌(ex. str -> int)
    }) 
  );
  await app.listen(3000);
}
bootstrap();
