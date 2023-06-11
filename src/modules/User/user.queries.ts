import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User, UsersQueryPayload, UserQueryPayload } from './user.model';

@Resolver(() => User)
export class UserQueriesResolver {
  constructor() {}

  @Query(() => UsersQueryPayload)
  users() {
    return {
      data: [
        {
          id: "VXNlcjox",
          name: 'Gabriel',
          fullName: 'User'
        },
        {
          id: "VXNlcjoy",
          name: 'John Doe',
          fullName: 'User'
        },
      ],
      response: {
        ok: true
      }
    };
  }

  @Query(() => UserQueryPayload)
  user() {
    return {
      data: {
        id: "VXNlcjox",
        name: 'Esnack',
        fullName: 'User'
      },
      response: {
        ok: true
      }
    };
  }
}
