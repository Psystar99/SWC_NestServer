import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get()
    findAll(): Promise<Blog[]>{
        return this.blogService.findAll();
    }

    @Post()
    create(@Body() blogData: CreateBlogDto){
        return this.blogService.create(blogData)
    }
}
