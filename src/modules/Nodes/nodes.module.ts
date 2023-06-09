import { Module } from '@nestjs/common';
import { NodesResolvers } from './nodes.resolvers';


@Module({
  imports: [],
  providers: [NodesResolvers],
})
export class NodesModule {}