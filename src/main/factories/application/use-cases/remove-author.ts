import { RemoveAuthorUseCase } from '@/application/use-cases'
import { makePgAuthorRepository } from '@/main/factories/infra/repositories/postgres'

export const makeRemoveAuthorUseCase = (): RemoveAuthorUseCase => {
  return new RemoveAuthorUseCase(
    makePgAuthorRepository()
  )
}
