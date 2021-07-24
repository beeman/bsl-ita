import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('users')
export class UserController {
  private db = [
    { id: 1, username: 'beeman' },
    { id: 2, username: 'jose' },
  ];
  constructor(private readonly appService: AppService) {}

  // GET /api/users
  @Get()
  users() {
    return this.db;
  }

  // GET /api/users/:id
  @Get(':id')
  user(@Param('id') id: number) {
    id = Number(id);
    const found = this.db.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }

  @Post()
  createUser(@Body() body) {
    const id = this.db.length + 1;
    const username = body.username;
    // Validation: check if username is unique
    const found = this.db.find((item) => item.username === username);
    if (found) {
      throw new NotFoundException(
        `User with username ${username} already exists!`
      );
    }

    this.db.push({ id, username });

    return this.user(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() body) {
    const user = this.user(id);
    const username = body.username;
    const found = this.db.find((item) => item.username === username);
    if (found) {
      throw new NotFoundException(
        `User with username ${username} already exists!`
      );
    }
    const newUser = { ...user, username };
    return {
      before: user,
      after: newUser,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    const user = this.user(id);
    this.db = this.db.filter((item) => item.id === id);
    return user;
  }
}
