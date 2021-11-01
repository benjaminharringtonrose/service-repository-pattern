import { injectable } from 'inversify';

@injectable()
export class UserRepository {
  async getUsers() {
    return [];
  }
}
