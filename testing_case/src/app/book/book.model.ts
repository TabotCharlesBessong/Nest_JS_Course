import { IsNotEmpty, IsString } from 'class-validator';

export class BookDto {
  _id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}
