import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { UserListQueryPayload, UserQueriesModule, UserQueryPayload } from './dtos/user-queries.dto';

@Resolver(() => UserQueriesModule)
export class UserQueriesResolver {
  constructor() {}

  @Query(() => UserQueriesModule)
  async userModule() {
    return {};
  }

  @ResolveField(() => UserQueryPayload)
  async user() {
    throw new Error('not implemented');
  }

  @ResolveField(() => UserListQueryPayload)
  async users() {
    throw new Error('not implemented');
  }
}
