import { injectable } from 'inversify';
import { UserRepository } from './user.repository';

@injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async getUsers() {
    return this._userRepository.getUsers();
  }
}
