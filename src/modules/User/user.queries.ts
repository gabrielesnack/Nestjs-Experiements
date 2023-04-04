import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Hobby, Jobs, UserModel, UserQueryPayload } from './user.model';

@Resolver(() => UserModel)
export class UserQueriesResolver {
  constructor() {}

  @Query(() => UserQueryPayload)
  async userModule() {
    return {};
  }

  @ResolveField(() => [Hobby])
  async hobbies(@Parent() user: UserModel) {
    return []
  }

  @ResolveField(() => [Jobs])
  async jobs(@Parent() user: UserModel) {
    return []
  }
}
