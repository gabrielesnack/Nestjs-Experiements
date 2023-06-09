import { Module } from '@nestjs/common';
// import { PostModule } from './modules/Post/post.module';
// import { UserModule } from './modules/User/user.module';
import { GraphQLModule, transformSchema } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/User/user.module';
import { join } from 'path';
import { NodesModule } from './modules/Nodes/nodes.module';

@Module({
  imports: [
    NodesModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
