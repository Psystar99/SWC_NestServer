import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"; //npm i @nestjs/mapped-types  - 타입을 변환시키고 사용할 수 있게 하는 패키지. DTO 변환시켜줌.
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){}