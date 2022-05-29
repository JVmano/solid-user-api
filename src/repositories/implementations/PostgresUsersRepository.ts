// ! this is a fake file using a local storage

import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

let users: User[] = [] // * save users in local machine

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const user = users.find((userData) => userData.email === email)
    return user
  }

  async save (user: User): Promise<void> {
    users.push(user)
  }

  async delete (email: string): Promise<void> {
    const storageUsers = users.find((userData) => userData.email !== email)
    users = []
    users.push(storageUsers)
  }
}
