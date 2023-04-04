import { ObjectType, Field } from "@nestjs/graphql";
import { DocumentModel } from "../document.model";
import { DocumentResponse } from "./document.response.dto";

@ObjectType()
export class DocumentModulePayload {}

@ObjectType()
export class DocumentQueryPayload {
    @Field(() => DocumentModel, { nullable: true})
    data: DocumentModel

    @Field(() => DocumentResponse)
    response: DocumentResponse
}

@ObjectType()
export class DocumentListQueryPayload {
    @Field(() => [DocumentModel], { nullable: true})
    data: DocumentModel[]

    @Field(() => DocumentResponse)
    response: DocumentResponse
}


