import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserQueriesResolver } from './user.queries';
import { UserModelResolver } from './user.resolver';

@Module({
  imports: [],
  providers: [
    UserQueriesResolver,
    UserModelResolver,
    PrismaService,
  ],
})
export class UserModule {}
