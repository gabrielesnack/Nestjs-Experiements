import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { UsersInput } from './dto';
import { UserService } from './user.service';

@Resolver('UserQueries')
export class UserQueriesResolver {
  constructor(private userService: UserService) {}

  @Query('userModule')
  async userModule() {
    return {};
  }

  @ResolveField('users')
  async getUsers(@Args('input') input: UsersInput) {
    return this.userService.getAllUsers(input.id);
  }
}
