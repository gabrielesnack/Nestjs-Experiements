import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserQueriesResolver } from './user.resolver';

@Module({
  imports: [],
  providers: [
    UserQueriesResolver,
    PrismaService,
  ],
})
export class UserModule {}
