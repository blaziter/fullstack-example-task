import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { UsersService } from '@user';
import { UserLoginResponseDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectPinoLogger(AuthService.name)
    private readonly logger: PinoLogger,
    private usersService: UsersService,
) {}

  async signIn(username: string, password: string): Promise<UserLoginResponseDto> {
    const user = await this.usersService.findOne(username);

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
