// ! this is a fake file using a local storage

import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [] // * save users in local machine

  async findByEmail (email: string): Promise<User> {
    const user = this.users.find((userData) => userData.email === email)
    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
