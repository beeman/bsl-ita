import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService extends PrismaClient {
  constructor() {
    super();
  }
}
