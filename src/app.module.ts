import { Module } from '@nestjs/common';
import { PostModule } from './modules/Post/post.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
