import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CourseController],
  providers: [AppService, DataService, UserService, CourseService],
})
export class AppModule {}
