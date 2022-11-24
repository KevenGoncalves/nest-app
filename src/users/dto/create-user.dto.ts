import { IsAlpha, IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  firstName: string;

  @IsAlpha()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsUrl()
  photoLink: string;
}
