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
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly service: CourseService) {}

  // GET /api/courses
  @Get()
  courses() {
    return this.service.courses();
  }

  // GET /api/courses/:id
  @Get(':id')
  course(@Param('id') id: string) {
    return this.service.course(id);
  }

  @Post()
  createCourse(@Body() body) {
    const input = {
      description: body.description,
      title: body.title,
    };
    if (!input.description) {
      throw new BadRequestException(`You need to provide an description`);
    }
    if (!input.title) {
      throw new BadRequestException(`You need to provide an title`);
    }

    return this.service.create(input);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() body) {
    const input = {
      description: body.description,
      title: body.title,
    };

    return this.service.update(id, input);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
