import { RemoveAuthorController } from '@/presentation/controllers/author'
import { makeRemoveAuthorUseCase } from '@/main/factories/application/use-cases/author'

export const makeRemoveAuthorController = (): RemoveAuthorController => {
  return new RemoveAuthorController(
    makeRemoveAuthorUseCase()
  )
}
