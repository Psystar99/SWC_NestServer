// 앱 모듈은 모든것의 루트 모듈 같은 것. 모듈은 애플리케이션의 일부. 한가지 기능을 하는 부분. 인스타그램의 비디오, 사진 모듈.
// app.module은 AppController와 AppProvider(AppService)만을 가지고 있어야 함. NestJS에서 앱은 여러 개의 모듈로 구성됨.
import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { AppController } from './app.controller';

@Module({ // 데코레이터 - 클래스에 함수 기능 추가할 수 있음. 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면 됨.
  imports: [MovieModule], // 앱을 만들 떄에는 모듈로 분리하는 것이 좋음
  controllers: [AppController], // 컨트롤러 - url 가져오고 함수 실행. like express의 라우터
  providers: [ ], 
})
export class AppModule {} //진또배기는 module 데코레이터 안에 있음