import { Bind, Controller, Dependencies, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
@Dependencies(AuthService)
export class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    @Post('login')
    @Bind(Req())
    async signIn(request) {
        const { username, password } = request.body;
        return this.authService.signIn(username, password);
    }
}
