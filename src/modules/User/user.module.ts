import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserMutationsResolver, UserQueriesResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [
    UserQueriesResolver,
    UserMutationsResolver,
    PrismaService,
    UserService,
  ],
})
export class UserModule {}
