import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [LoggerModule.forRoot(), AuthModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
