import { CreatePostDTO } from '../Post/dto';

export class CreateUserDTO {
  name: string;
  email: string;
  post?: CreatePostDTO;
}
