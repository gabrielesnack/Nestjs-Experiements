import { Resolver, Mutation } from '@nestjs/graphql';
import { User, UserQueryPayload } from './user.model';

@Resolver(() => User)
export class UserMutationsResolver {
  constructor() {}

  @Mutation(() => UserQueryPayload)
  updateUser() {
    return {
      data: {
        id: "VXNlcjox",
        name: 'Abram',
        fullName: 'User'
      },
      response: {
        ok: true
      }
    };
  }
}
