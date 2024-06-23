import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {
    this.users = [
      {
        userId: 'c1d97fcb-7473-45de-9783-55e6980124ae',
        username: 'john',
        roles: ['user'],
        password: 'changeme',
      },
      {
        userId: 'a0499066-d531-475d-bcc7-20fe094c612d',
        username: 'maria',
        roles: ['user', 'admin'],
        password: 'guess',
      },
    ];
  }

  async findOne(username) {
    return this.users.find((user) => user.username === username);
  }

  async findById(userId) {
    return this.users.find((user) => user.userId === userId);
  }

  async findAll() {
    return this.users.map(({ password, ...user }) => user);
  }
}
