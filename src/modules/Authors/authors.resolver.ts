import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }
}
