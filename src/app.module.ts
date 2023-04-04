import { Module } from '@nestjs/common';
// import { PostModule } from './modules/Post/post.module';
// import { UserModule } from './modules/User/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/User/user.module';
import { join } from 'path';
import { DocumentModule } from './modules/Document/document.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    DocumentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
