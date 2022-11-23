import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  @ApiProperty()
  firstName: string;

  @IsAlpha()
  @ApiProperty()
  lastName: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsUrl()
  @ApiProperty()
  photoLink: string;
}
