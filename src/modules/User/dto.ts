import { IsInt } from 'class-validator';
import { CreateUserInput, User } from 'src/graphql';

export class UsersInput {
  @IsInt()
  id: User['id'];
}

export class CreateUserDTO extends CreateUserInput {}
