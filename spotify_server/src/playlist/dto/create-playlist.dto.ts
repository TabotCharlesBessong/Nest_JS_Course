import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlayListDTO {
  @IsString()
  @IsNotEmpty()
  readonly name;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({},{each:true})
  readonly songs

  @IsNumber()
  @IsNotEmpty()
  readonly user:number
}