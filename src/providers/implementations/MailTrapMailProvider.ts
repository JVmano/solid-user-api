import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { IMailProvider, IMessage } from '../IMailProvider'

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2b285f9a50dcfc',
        pass: '91b95eb01cebd6'
      }
    })
  }

  async sendEmail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
