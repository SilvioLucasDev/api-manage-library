import { type OnServer } from '@/application/contracts/adapters'
import { makeRegisterUserController, makeRemoveUserController } from '@/main/factories/presentation/controllers'

export class UserRouter {
  constructor(httpServer: OnServer) {
    httpServer.on({
      method: 'post',
      url: '/users',
      callback: async (params: any, body: any) => {
        return await makeRegisterUserController().handle(body)
      }
    })

    httpServer.on({
      method: 'delete',
      url: '/users/:userId',
      callback: async (params: any) => {
        return await makeRemoveUserController().handle(params)
      }
    })
  }
}
