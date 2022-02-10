// 서비스는 일반적으로 실제 함수를 가지는 부분
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi World!';
  }
}
