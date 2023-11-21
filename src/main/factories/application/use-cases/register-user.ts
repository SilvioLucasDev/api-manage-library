import { RegisterUserUseCase } from '@/application/use-cases'
import { makePgUserRepository, makePgLibraryRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterUserUseCase = (): RegisterUserUseCase => {
  return new RegisterUserUseCase(
    makePgUserRepository(),
    makePgLibraryRepository(),
    makeUUIDAdapter()
  )
}
