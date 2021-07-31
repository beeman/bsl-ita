import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user-create.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  // GET /api/users
  @Get()
  users() {
    return this.service.users();
  }

  // GET /api/users/:id
  @Get(':id')
  user(@Param('id') id: string) {
    return this.service.user(id);
  }

  @Post()
  createUser(@Body() body: UserCreateDto) {
    const input = {
      email: body.email,
      username: body.username,
    };
    // if (!input.email) {
    //   throw new BadRequestException(`You need to provide an email`);
    // }
    // if (!input.username) {
    //   throw new BadRequestException(`You need to provide an username`);
    // }

    return this.service.create(input);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body) {
    const input = {
      email: body.email,
      username: body.username,
    };

    return this.service.update(id, input);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
