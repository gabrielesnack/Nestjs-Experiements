import { Module } from '@nestjs/common';
// import { PostModule } from './modules/Post/post.module';
// import { UserModule } from './modules/User/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthorsModule } from './modules/Authors/authors.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    AuthorsModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      debug: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
