import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { UserListQueryPayload, UserModulePayload, UserQueryPayload } from './dtos/user-queries.dto';

@Resolver(() => UserModulePayload)
export class UserQueriesResolver {
  constructor() {}

  @Query(() => UserModulePayload)
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
