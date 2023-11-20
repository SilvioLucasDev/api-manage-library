import { type OnServer } from '@/application/contracts/adapters'
import { makeRegisterAuthorController } from '@/main/factories/presentation/controllers'

export class AuthorRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/authors',
      callback: async (params: any, body: any) => {
        return await makeRegisterAuthorController().handle(body)
      }
    })
  }
}
