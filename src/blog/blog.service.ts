import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

    async create(createblogDto: CreateBlogDto): Promise<Blog> {
      const createdblog = new this.blogModel(createblogDto);
      return createdblog.save();
    }
  
    async findAll(): Promise<Blog[]> {
      return this.blogModel.find().exec();
    }    
}
