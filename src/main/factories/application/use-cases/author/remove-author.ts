import { RemoveAuthorUseCase } from '@/application/use-cases/author'
import { makePgAuthorRepository } from '@/main/factories/infra/repositories/prisma'

export const makeRemoveAuthorUseCase = (): RemoveAuthorUseCase => {
  return new RemoveAuthorUseCase(
    makePgAuthorRepository()
  )
}
