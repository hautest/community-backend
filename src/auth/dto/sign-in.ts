import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SignInDto {
  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNumber()
  kakaoId?: number;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsOptional()
  @IsString()
  email?: string;
}
