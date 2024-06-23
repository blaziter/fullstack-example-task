import {
  Dependencies,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from '../user/user.service';

@Injectable()
@Dependencies(UserService)
export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async signIn(username, password) {
    const user = await this.userService.findOne(username);

    if (user.password !== password || !user) {
      this.logger.error(`Username or password is invalid`);
      throw new UnauthorizedException();
    }

    return {
      username: user.username,
      roles: user.roles,
    };
  }
}
