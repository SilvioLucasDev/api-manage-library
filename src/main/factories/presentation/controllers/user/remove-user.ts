import { RemoveUserController } from '@/presentation/controllers/user'
import { makeRemoveUserUseCase } from '@/main/factories/application/use-cases/user'

export const makeRemoveUserController = (): RemoveUserController => {
  return new RemoveUserController(
    makeRemoveUserUseCase()
  )
}
