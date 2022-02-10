//NestJS는 콘트롤러를 비즈니스 로직이랑 구분짓고 싶어함. 컨트롤러는 그냥 url을 가져오고 함수를 실행하는 역할.
// 나머지 비즈니스 로직은 서비스로

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 컨트롤러는 url로의 요청을 받음. express.js의 controller/router와 같은 것.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Get 데코레이터. express의 get 라우터와 같은 역할
  getHello(): string {
    return this.appService.getHello();
  }

  // url - "/hello". NestJS는 누군가 /hello로 들어오면 sayHello라는 함수 실행해야 된다는 것을 앎.
  @Get("/hello") 
  sayHello(): string {  // 데코레이터는 꾸며주는 함수나 클래스와 붙어있어야 함. 빈칸 X.
    return this.appService.getHi();
  }
}
