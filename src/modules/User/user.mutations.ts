import { Resolver, Mutation } from '@nestjs/graphql';
import { User, UsersQueryPayload } from './user.model';

@Resolver(() => User)
export class UserMutationsResolver {
  constructor() {}

  @Mutation(() => UsersQueryPayload)
  updateUser() {
    return {
      id: "VXNlcjox",
      name: 'Abram',
      fullName: 'User'
    };
  }
}
