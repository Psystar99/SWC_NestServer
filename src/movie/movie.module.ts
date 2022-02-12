import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
    controllers: [MovieController],
    providers: [MovieService], //Dependency Injection : NestJS가 알아서 MovieService를 import하고 Controller에 inject함.
})

export class MovieModule {}
