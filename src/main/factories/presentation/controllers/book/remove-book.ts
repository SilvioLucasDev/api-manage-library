import { RemoveBookController } from '@/presentation/controllers/book'
import { makeRemoveBookUseCase } from '@/main/factories/application/use-cases/book'

export const makeRemoveBookController = (): RemoveBookController => {
  return new RemoveBookController(
    makeRemoveBookUseCase()
  )
}
