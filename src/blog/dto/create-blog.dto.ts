import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBlogDto{
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly date: number;
    
    @IsString()
    readonly contents: string;
}