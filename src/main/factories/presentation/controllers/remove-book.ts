import { RemoveBookController } from '@/presentation/controllers'
import { makeRemoveBookUseCase } from '@/main/factories/application/use-cases'

export const makeRemoveBookController = (): RemoveBookController => {
  return new RemoveBookController(
    makeRemoveBookUseCase()
  )
}
