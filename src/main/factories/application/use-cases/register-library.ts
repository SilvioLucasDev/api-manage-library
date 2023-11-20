import { RegisterLibraryUseCase } from '@/application/use-cases'
import { makePgLibraryRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterLibraryUseCase = (): RegisterLibraryUseCase => {
  return new RegisterLibraryUseCase(
    makePgLibraryRepository(),
    makeUUIDAdapter()
  )
}
