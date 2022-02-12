// 서비스로 보내고 받을 클래스(인터페이스)를 export. 보통은 entities에 실제로 데이터베이스의 모델을 만듦.
export class Movie{
    id: number;
    title:string;
    year: number;
    genres: string[];
}