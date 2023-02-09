import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @Post('/user/create')
  async createUser(@Body() params: CreateUserDTO) {
    const { post, ...userData } = params;

    return this.userService.createUser({
      ...userData,
      posts: {
        create: post,
      },
    });
  }
}
