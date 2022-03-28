import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto} from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie') // url의 Entry Point를 컨트롤 - localhost:3000/movie로 들어와야지 접속됨
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    getAll(): Movie[]{
        // 작동 이유: movieService라는 property를 만들고 MovieService라는 타입을 지정해줘서 - dependecy injection
        return this.movieService.getAll();
    }

    @Get('search') // movie/search?year=200. 이때 id를 받는 라우터가 search 위에 있으면 search 작동 x.
    search(@Query('year') year: string) {
        return `We are searching for a movie after ${year}`;
    }

    @Get(":id") 
    getOne(@Param('id') movieid: number): Movie{ //NestJS는 무언가 필요하면 우리가 요청해야됨. 우리는 url에 있는 id라는 parameter을 get하길 원함. 그리고 movieid라는 argument에 스트링 타입으로 저장.
        return this. movieService.getOne(movieid);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieid: number ){
        return this.movieService.deleteOne(movieid);
    }

    //put은 전체 업데이트. patch는 일부 업데이트
    @Patch(':id')
    patch(@Param('id') movieid: number, @Body() updateData: UpdateMovieDto){
        return this.movieService.update(movieid, updateData);
    }
}
