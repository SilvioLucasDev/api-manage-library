import { RegisterBookUseCase } from '@/application/use-cases/book'
import { makePgAuthorRepository, makePgBookRepository, makePgLibraryRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterBookUseCase = (): RegisterBookUseCase => {
  return new RegisterBookUseCase(
    makePgBookRepository(),
    makePgLibraryRepository(),
    makePgAuthorRepository(),
    makeUUIDAdapter()
  )
}
