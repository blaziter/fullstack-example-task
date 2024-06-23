import { Controller, Dependencies, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
@Dependencies(UserService)
export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.userService.findOne(id);
  }
}
