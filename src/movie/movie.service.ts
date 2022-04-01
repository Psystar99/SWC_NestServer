import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument, MovieSchema } from './entities/movie.entity';

// Query 처리
@Injectable()
export class MovieService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}
    
    async getAll() : Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async getOne(id: number): Promise<Movie> {
        let queryParam = {};
        queryParam['id']= id;
        return this.movieModel.findOne(queryParam).exec();
    }

    async create(movieDto: CreateMovieDto): Promise<Movie> {
        const createdmovie = new this.movieModel({
            ...movieDto,
            createdAt: new Date(),});
        return createdmovie.save();
    }

    deleteOne(id: number) {
        let queryParam = {};
        queryParam['id']= id;
        return this.movieModel.findOneAndDelete(queryParam).exec();
    }

    update(id: number, updateData: UpdateMovieDto) {
        let queryParam = {};
        queryParam['id']= id;
        return this.movieModel.findOneAndUpdate(queryParam, updateData, {
            new: true
        });
    }
}
