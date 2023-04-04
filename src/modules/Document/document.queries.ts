import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { DocumentListQueryPayload, DocumentModulePayload, DocumentQueryPayload } from './dtos/document.dto';

@Resolver(() => DocumentModulePayload)
export class DocumentQueriesResolver {
  constructor() {}

  @Query(() => DocumentModulePayload)
  async documentModule() {
    return {};
  }

  @ResolveField(() => DocumentQueryPayload)
  async document() {
    throw new Error('not implemented');
  }

  @ResolveField(() => DocumentListQueryPayload)
  async documents() {
    throw new Error('not implemented');
  }

  @ResolveField(() => DocumentQueryPayload)
  async anotherSampleQuery() { // other by some reason or different and crazy queries
    throw new Error('not implemented');
  }
}
