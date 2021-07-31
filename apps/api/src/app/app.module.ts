import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, DataService, UserService],
})
export class AppModule {}
