import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginBodyDto, UserLoginResponseDto } from './auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() body: UserLoginBodyDto): Promise<UserLoginResponseDto> {
    return this.authService.signIn(body.username, body.password);
  }
}
