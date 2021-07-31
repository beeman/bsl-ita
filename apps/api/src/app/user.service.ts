import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataService } from './data.service';

@Injectable()
export class UserService {
  constructor(private readonly data: DataService) {}

  // Method that return an array of Users
  users() {
    return this.data.user.findMany();
  }

  // Method that return a single User
  async user(userId: string) {
    const found = await this.data.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!found) {
      throw new NotFoundException(`User with id ${userId} not found!`);
    }
    return found;
  }

  async create(input: { email: string; username: string }) {
    const foundEmail = await this.data.user.findUnique({
      where: { email: input.email },
    });
    if (foundEmail) {
      throw new BadRequestException(`Can't use email ${input.email}`);
    }
    const foundUsername = await this.data.user.findUnique({
      where: { username: input.username },
    });
    if (foundUsername) {
      throw new BadRequestException(`Can't use username ${input.username}`);
    }

    return this.data.user.create({
      data: {
        email: input.email,
        username: input.username,
      },
    });
  }

  async update(userId: string, input: { email: any; username: any }) {
    await this.user(userId);
    return this.data.user.update({
      where: { id: userId },
      data: { email: input.email, username: input.username },
    });
  }

  async delete(userId: string) {
    await this.user(userId);
    return this.data.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
