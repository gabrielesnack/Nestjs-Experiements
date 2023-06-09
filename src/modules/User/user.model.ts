import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { toGlobalId } from "graphql-relay";
import { Node } from '../nodes/node.model';
@ObjectType({ implements: Node})
export class User extends Node  {
  @Field()
  name: string
}

@ObjectType({ isAbstract: true})
export class UserResponse {
  @Field(() => Boolean)
  ok: boolean
}

@ObjectType()
export class UsersQueryPayload {
  @Field(() => [User], { nullable: "itemsAndList"})
  data: User[]

  @Field(() => UserResponse)
  response: UserResponse
}

@ObjectType()
export class UserQueryPayload {
  @Field(() => User, { nullable: true})
  data: User

  @Field(() => UserResponse)
  response: UserResponse
}