// 데이터 전송 객체(Data Transfer Object): 사람들이 보낼 수 있는 것. 보냈으면 하는 것.

import { IsNumber, IsString } from "class-validator";

// DTO는 코드를 더 간결하게 하기 위해, 그리고 NestJS가 들어오는 쿼리에 대해 유효성 검사를 할 수 있게 해줌.
export class CreateMovieDto{
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsString({each:true})
    readonly genres: string[];
}