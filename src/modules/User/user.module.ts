import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserMutationsResolver } from './user.mutations';
import { UserQueriesResolver } from './user.queries';
import { UserModelResolver } from './user.resolver';

@Module({
  imports: [],
  providers: [
    UserQueriesResolver,
    UserMutationsResolver,
    UserModelResolver,
    PrismaService,
  ],
})
export class UserModule {}
