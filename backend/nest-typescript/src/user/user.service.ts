import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

import {
  FindAllUsersResponseDto,
  FindUserByIdResponseDto,
  User,
} from './user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 'c1d97fcb-7473-45de-9783-55e6980124ae' as UUID,
      username: 'john',
      roles: ['user'],
      password: 'changeme',
    },
    {
      userId: 'a0499066-d531-475d-bcc7-20fe094c612d' as UUID,
      username: 'maria',
      roles: ['user', 'admin'],
      password: 'guess',
    },
  ];

  async findAll(): Promise<FindAllUsersResponseDto> {
    return this.users.map(({ password, ...user }) => user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findById(userId: UUID): Promise<FindUserByIdResponseDto | undefined> {
    return this.users.find((user) => user.userId === userId);
  }
}
