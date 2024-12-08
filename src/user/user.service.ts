import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user } from 'drizzle/schema';
import { db } from 'src/db';
import { create } from 'domain';

@Injectable()
export class UserService {
  async create() {
    await db.insert(user).values({
      createdAt: new Date().toISOString(),
      nickname: '12',
      refreshToken: '12',
    });

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user 배포 테스트4`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
