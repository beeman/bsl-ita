import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataService } from './data.service';

@Injectable()
export class CourseService {
  constructor(private readonly data: DataService) {
    // this.data.comment
    //   .create({
    //     data: {
    //       courseId: 'ckrs8my2f0000r45kl7hyfxrm',
    //       authorId: 'ckrs8low80006co5ksm860qqa',
    //       text: 'Super Cool!',
    //     },
    //     include: {
    //       course: true,
    //       author: true,
    //     },
    //   })
    //   .then((res) => {
    //     console.log('res', res);
    //   });
  }

  // Method that return an array of Courses
  async courses() {
    return this.data.course.findMany({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
        },
      },
    });
  }

  // Method that return a single Course
  async course(courseId: string) {
    const found = await this.data.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!found) {
      throw new NotFoundException(`Course with id ${courseId} not found!`);
    }
    return found;
  }

  async create(input: { description: string; title: string }) {
    // return this.data.course.create({
    //   data: {
    //     description: input.description,
    //     title: input.title,
    //   },
    // });
  }

  async update(courseId: string, input: { description: any; title: any }) {
    await this.course(courseId);
    return this.data.course.update({
      where: { id: courseId },
      data: { description: input.description, title: input.title },
    });
  }

  async delete(courseId: string) {
    await this.course(courseId);
    return this.data.course.delete({
      where: {
        id: courseId,
      },
    });
  }
}
