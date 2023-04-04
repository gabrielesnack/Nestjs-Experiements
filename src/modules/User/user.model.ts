import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Hobby {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class Jobs {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class UserModel {
  @Field()
  id: string

  @Field()
  name: string

  @Field(() => [Hobby])
  hobbies: Hobby[]
}

@ObjectType()
export class UserResponse {
  @Field(() => Boolean)
  ok: boolean
}

@ObjectType()
export class UserQueryPayload {
  @Field(() => UserModel)
  data: UserModel

  @Field(() => UserResponse)
  response: UserResponse
}