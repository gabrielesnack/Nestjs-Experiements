import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileModel {
  @Field()
  id: string

  @Field()
  documentId: string

  @Field()
  url: string

  @Field({ nullable: true })
  fileType: string

  @Field()
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date
}