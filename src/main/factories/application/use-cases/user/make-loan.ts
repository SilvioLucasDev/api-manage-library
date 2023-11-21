import { MakeLoanUseCase } from '@/application/use-cases/user'
import { makePgUserRepository, makePgBookUserRepository, makePgBookRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeMakeLoanUseCase = (): MakeLoanUseCase => {
  return new MakeLoanUseCase(
    makePgBookUserRepository(),
    makePgBookRepository(),
    makePgUserRepository(),
    makeUUIDAdapter()
  )
}
