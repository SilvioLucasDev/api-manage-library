import { type OnServer } from '@/application/contracts/adapters'
import { makeRegisterBookController, makeRemoveBookController } from '@/main/factories/presentation/controllers'

export class BookRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/books',
      callback: async (params: any, body: any) => {
        return await makeRegisterBookController().handle(body)
      }
    })

    httpServer.on({
      method: 'delete',
      url: '/books/:bookId',
      callback: async (params: any) => {
        return await makeRemoveBookController().handle(params)
      }
    })
  }
}
