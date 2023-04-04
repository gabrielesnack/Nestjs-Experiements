import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class DocumentResponse {
  @Field(() => Boolean)
  ok: boolean
}