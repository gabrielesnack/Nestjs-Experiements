import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DocumentModel {
  @Field()
  id: string

  @Field()
  name: string
}


