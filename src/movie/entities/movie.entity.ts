// 서비스로 보내고 받을 클래스(인터페이스)를 export. 보통은 entities에 실제로 데이터베이스의 모델을 만듦.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie{
    @Prop()
    id: number;

    @Prop()
    title:string;

    @Prop()
    year: number;

    @Prop()
    genres: string[];

    @Prop()
    createdAt: Date;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);