import { Resolver, Args, Mutation, ResolveField } from '@nestjs/graphql';
import { CreateUserDTO } from './dto';
import { UserService } from './user.service';

@Resolver('UserMutations')
export class UserMutationsResolver {
  constructor(private userService: UserService) {}

  @Mutation('userModule')
  async userModule() {
    return {};
  }

  @ResolveField('createUser')
  async createUser(@Args('input') input: CreateUserDTO) {
    const { name, email } = input;
    console.log(input);
    return this.userService.createUser({
      name,
      email,
    });
  }
}
