import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'

export class DeleteUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: IDeleteUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (!userAlreadyExists) {
      throw new Error("User doesn't exists❗")
    }

    await this.usersRepository.delete(data.email)

    await this.mailProvider.sendEmail({
      to: {
        name: 'Deleted User',
        email: data.email
      },
      from: {
        name: 'Equipe do App',
        email: 'equipe@app.com.br'
      },
      subject: 'Usuário deletado',
      body: '<p>Seu cadastro foi removido da plataforma.</p>'
    })
  }
}
