


import { Args, createUnionType, Field, ID, ObjectType, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { fromGlobalId } from 'graphql-relay';
import { NodeData } from './node.model';
import { User } from '../User/user.model';

@Resolver()
export class NodesResolvers {
  constructor() {}

  @Query(() => NodeData, { nullable: true })
  async node(
    @Args({ name: 'id', type: () => ID }) id: string,
  ) {
    const resolvedGlobalId = fromGlobalId(id);

    console.log(resolvedGlobalId)

    const user = new User()

    user.id = id
    user.name = "Gabriel"

    return user;
  }
}