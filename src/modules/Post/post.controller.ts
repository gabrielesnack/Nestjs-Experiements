import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDTO } from './dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/post/create')
  async createPost(@Body() postData: CreatePostDTO) {
    const { title, content, authorEmail } = postData;

    return this.postService.create({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Get('/posts')
  async getAllPosts() {
    return this.postService.posts({});
  }
}
