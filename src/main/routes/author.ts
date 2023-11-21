import { type OnServer } from '@/application/contracts/adapters'
import { makeRegisterAuthorController, makeRemoveAuthorController } from '@/main/factories/presentation/controllers/author'

export class AuthorRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/authors',
      callback: async (params: any, body: any) => {
        return await makeRegisterAuthorController().handle(body)
      }
    })

    httpServer.on({
      method: 'delete',
      url: '/authors/:authorId',
      callback: async (params: any) => {
        return await makeRemoveAuthorController().handle(params)
      }
    })
  }
}
