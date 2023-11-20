import { RemoveAuthorController } from '@/presentation/controllers'
import { makeRemoveAuthorUseCase } from '@/main/factories/application/use-cases'

export const makeRemoveAuthorController = (): RemoveAuthorController => {
  return new RemoveAuthorController(
    makeRemoveAuthorUseCase()
  )
}
