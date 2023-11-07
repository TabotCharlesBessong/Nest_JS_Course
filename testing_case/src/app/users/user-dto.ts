import {
  ArrayNotEmpty,
  ArrayUnique,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
