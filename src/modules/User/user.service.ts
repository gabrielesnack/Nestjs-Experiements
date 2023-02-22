import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(id: User['id']): Promise<User[]> {
    // const { skip, take, cursor, where, orderBy } = params;
    const response = await this.prisma.user.findMany({
      where: {
        id: id,
      },
    });

    return response;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
