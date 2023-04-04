import { Resolver, ResolveField } from '@nestjs/graphql';
import { DocumentListQueryPayload } from '../Document/dtos/document.dto';
import { UserModel } from './user.model';

@Resolver(() => UserModel)
export class UserModelResolver {
    @ResolveField(() => DocumentListQueryPayload)
    async documents() {
        throw new Error('not implemented');    
    }
}