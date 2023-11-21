import { RegisterLibraryUseCase } from '@/application/use-cases/library'
import { makePgLibraryRepository } from '@/main/factories/infra/repositories/prisma'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterLibraryUseCase = (): RegisterLibraryUseCase => {
  return new RegisterLibraryUseCase(
    makePgLibraryRepository(),
    makeUUIDAdapter()
  )
}
