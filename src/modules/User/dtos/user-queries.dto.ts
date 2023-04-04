import { ObjectType, Field } from "@nestjs/graphql";
import { UserModel } from "../user.model";
import { UserResponse } from "./user.response.dto";

@ObjectType()
export class UserQueriesModule {}

@ObjectType()
export class UserQueryPayload {
    @Field(() => UserModel, { nullable: true})
    data: UserModel

    @Field(() => UserResponse)
    response: UserResponse
}

@ObjectType()
export class UserListQueryPayload {
    @Field(() => [UserModel], { nullable: true})
    data: UserModel[]

    @Field(() => UserResponse)
    response: UserResponse
}


