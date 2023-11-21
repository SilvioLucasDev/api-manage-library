import { RemoveBookUseCase } from '@/application/use-cases/book'
import { makePgBookRepository } from '@/main/factories/infra/repositories/prisma'

export const makeRemoveBookUseCase = (): RemoveBookUseCase => {
  return new RemoveBookUseCase(
    makePgBookRepository()
  )
}
