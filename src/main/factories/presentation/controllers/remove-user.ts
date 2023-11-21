import { RemoveUserController } from '@/presentation/controllers'
import { makeRemoveUserUseCase } from '@/main/factories/application/use-cases'

export const makeRemoveUserController = (): RemoveUserController => {
  return new RemoveUserController(
    makeRemoveUserUseCase()
  )
}
