import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './entities/movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])
    ],
    controllers: [MovieController],
    providers: [MovieService], //Dependency Injection : provider을 여기에 둠으로써 NestJS가 알아서 MovieService를  import하고 Controller에 inject함.
})

export class MovieModule {}
 