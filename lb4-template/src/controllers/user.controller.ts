import {repository} from '@loopback/repository';
import {get, post, requestBody} from '@loopback/rest';
import {User} from '../models/user.model';
import {UserRepository} from '../repositories/user.repository';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users')
  async createUser(
    @requestBody() userData: Partial<User>
  ): Promise<User> {
    return this.userRepository.create(userData);
  }

  @get('/users')
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
