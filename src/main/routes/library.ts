import { type OnServer } from '@/application/contracts/adapters'
import { makeRegisterLibraryController } from '@/main/factories/presentation/controllers/library'

export class LibraryRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/libraries',
      callback: async (params: any, body: any) => {
        return await makeRegisterLibraryController().handle(body)
      }
    })
  }
}
