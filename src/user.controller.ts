import { controller, httpGet } from 'inversify-express-utils';
import { UserService } from './user.service';

@controller('/users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  // /users/
  @httpGet('/')
  async index() {
    const users = await this._userService.getUsers();
    return `current users: ${users.length}`;
  }
}
