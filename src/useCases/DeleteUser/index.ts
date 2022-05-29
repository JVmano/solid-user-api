import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
