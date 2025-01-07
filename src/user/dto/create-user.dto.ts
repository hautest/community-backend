import { IsInt, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsInt()
  kakaoId?: number;

  @IsString()
  nickname: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  refreshToken: string;
}
