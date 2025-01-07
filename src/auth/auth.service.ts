import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in';
import { ErrorRes, SuccessRes } from 'src/common/Response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn({ nickname, email, kakaoId, password }: SignInDto) {
    const users = await this.userService.findOne({ email, kakaoId });

    if (users.length)
      return ErrorRes({ statusCode: 400, message: '이미 가입한 계정입니다.' });

    const accessTokenPayload = { nickname, email, kakaoId };
    const accessToken = await this.jwtService.signAsync(accessTokenPayload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: '15m',
    });

    const refreshTokenPayload = { email, kakaoId };
    const refreshToken = await this.jwtService.signAsync(refreshTokenPayload, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: '7d',
    });

    await this.userService.create({
      nickname,
      email,
      kakaoId,
      password,
      refreshToken,
    });

    return SuccessRes({
      data: { accessToken, refreshToken },
    });
  }
}
