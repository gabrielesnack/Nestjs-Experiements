import { InterfaceType, Field, ID, ObjectType, createUnionType } from '@nestjs/graphql';
import { User } from '../User/user.model';

@InterfaceType()
export abstract class Node {
  @Field(() => ID)
  id: string;
}

export const NodeData = createUnionType({
  name: 'NodeData',
  types: () => [User] as const,
});