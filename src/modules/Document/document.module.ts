import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DocumentQueriesResolver } from './document.queries';
import { DocumentModelResolver } from './document.resolver';

@Module({
  imports: [],
  providers: [
    DocumentQueriesResolver,
    DocumentModelResolver,
    PrismaService,
  ],
})
export class DocumentModule {}
