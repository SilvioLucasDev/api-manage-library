import { RegisterUserUseCase } from '@/application/use-cases/user'
import { makePgUserRepository, makePgLibraryRepository } from '@/main/factories/infra/repositories/prisma'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterUserUseCase = (): RegisterUserUseCase => {
  return new RegisterUserUseCase(
    makePgUserRepository(),
    makePgLibraryRepository(),
    makeUUIDAdapter()
  )
}
