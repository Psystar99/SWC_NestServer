// 데이터 전송 객체(Data Transfer Object): 사람들이 보낼 수 있는 것. 보냈으면 하는 것.
import { IsNumber, IsOptional, IsString } from "class-validator";

// DTO는 코드를 더 간결하게 하기 위해, 그리고 NestJS가 들어오는 쿼리에 대해 유효성 검사를 할 수 있게 해줌.
export class CreateMovieDto{
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional() // 모든 요소를 받아도 되지 않을때 - class-validator 라이브러리 기능(유효성 체크)
    @IsString({each:true}) // each - 모든 요소를 하나씩 검사
    readonly genres: string[];
}

//NestJS로 TS의 보안도 이용할 수 있고, 유효성 검사도 따로 하지 않아도 됨. NestJS가 모든 검사 해줌