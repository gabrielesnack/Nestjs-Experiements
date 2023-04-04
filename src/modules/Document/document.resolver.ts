import { Resolver, ResolveField } from '@nestjs/graphql';
import { FileModel } from '../File/file.model';
import { DocumentModel } from './document.model';


@Resolver(() => DocumentModel)
export class DocumentModelResolver {
    @ResolveField(() => [FileModel])
    async files() {
        throw new Error('not implemented');    
    }
}