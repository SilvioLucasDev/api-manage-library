import { type OnServer } from '@/application/contracts/adapters'
import { makeGetBooksController, makeRegisterBookController, makeRemoveBookController } from '@/main/factories/presentation/controllers/book'

export class BookRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/books',
      callback: async (params: any, body: any, query: any) => {
        return await makeRegisterBookController().handle({ ...params, ...body, ...query })
      }
    })

    httpServer.on({
      method: 'delete',
      url: '/books/:bookId',
      callback: async (params: any, body: any, query: any) => {
        return await makeRemoveBookController().handle({ ...params, ...body, ...query })
      }
    })

    httpServer.on({
      method: 'get',
      url: '/books',
      callback: async (params: any, body: any, query: any) => {
        return await makeGetBooksController().handle({ ...params, ...body, ...query })
      }
    })
  }
}
