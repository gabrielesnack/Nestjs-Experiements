import { Resolver, ResolveField, Mutation } from '@nestjs/graphql';
import { UserMutationsModule } from './dtos/user-mutations.dto';

@Resolver(() => UserMutationsModule)
export class UserMutationsResolver {
  constructor() {}

  @Mutation(() => UserMutationsModule)
  async userModule() {
    return {};
  }

  @ResolveField(() => Boolean)
  async userCreate() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userDelete() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userUpdate() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userUpdateAddress() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userUpdateContact() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userUpdateDocument() {
    throw new Error('not implemented');
  }

  @ResolveField(() => Boolean)
  async userUpdateStatus() {
    throw new Error('not implemented');
  }
}
