import { RegisterAuthorUseCase } from '@/application/use-cases'
import { makePgAuthorRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterAuthorUseCase = (): RegisterAuthorUseCase => {
  return new RegisterAuthorUseCase(
    makePgAuthorRepository(),
    makeUUIDAdapter()
  )
}
