import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { user } from 'drizzle/schema';
import { db } from 'src/db';
import { eq, or } from 'drizzle-orm';
import { SuccessRes } from 'src/common/Response';
import dayjs from 'src/common/dayjs';

@Injectable()
export class UserService {
  async create(userInfo: CreateUserDto) {
    const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    await db.insert(user).values({ ...userInfo, createdAt });

    return SuccessRes({ data: {} });
  }

  async findOne({
    email = '',
    kakaoId = 0,
  }: {
    email?: string;
    kakaoId?: number;
  }) {
    return await db
      .select()
      .from(user)
      .where(or(eq(user.email, email), eq(user.kakaoId, kakaoId)));
  }
}
