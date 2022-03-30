import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog , BlogSchema} from './blog.schema';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }])
    ],   
    // exports: [MongooseModule], -> 캡슐화 해제. 원래 은닉되었던 상태 해제
    providers: [BlogService], controllers: [BlogController],
})
export class BlogModule {}
