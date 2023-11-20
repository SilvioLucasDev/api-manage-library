import { RegisterBookUseCase } from '@/application/use-cases'
import { makePgBookRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterBookUseCase = (): RegisterBookUseCase => {
  return new RegisterBookUseCase(
    makePgBookRepository(),
    makeUUIDAdapter()
  )
}
