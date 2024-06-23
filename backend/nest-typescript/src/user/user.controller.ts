import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import {
  FindAllUsersResponseDto,
  FindUserByIdParamsDto,
  FindUserByIdResponseDto,
} from './user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':id')
  findUserById(
    @Param('id') params: FindUserByIdParamsDto
  ): Promise<FindUserByIdResponseDto> {
    return this.userService.findById(params.userId);
  }

  @Get()
  findAll(): Promise<FindAllUsersResponseDto> {
    return this.userService.findAll();
  }
}
