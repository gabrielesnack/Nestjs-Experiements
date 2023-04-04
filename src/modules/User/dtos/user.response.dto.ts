import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class UserResponse {
  @Field(() => Boolean)
  ok: boolean
}