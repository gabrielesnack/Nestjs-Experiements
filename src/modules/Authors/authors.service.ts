import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma.service';
// import { User, Prisma } from '@prisma/client';

@Injectable()
export class AuthorsService {
  async findOneById(id: number) {
    return 'hello';
  }
}
