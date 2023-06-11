import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserQueriesResolver, UserMutationsResolver } from './user.resolver';

@Module({
  imports: [],
  providers: [
    UserQueriesResolver,
    UserMutationsResolver,
    PrismaService,
  ],
})
export class UserModule {}
