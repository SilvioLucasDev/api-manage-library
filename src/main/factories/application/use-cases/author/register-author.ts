import { RegisterAuthorUseCase } from '@/application/use-cases/author'
import { makePgAuthorRepository, makePgLibraryRepository } from '@/main/factories/infra/repositories/prisma'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterAuthorUseCase = (): RegisterAuthorUseCase => {
  return new RegisterAuthorUseCase(
    makePgAuthorRepository(),
    makePgLibraryRepository(),
    makeUUIDAdapter()
  )
}
