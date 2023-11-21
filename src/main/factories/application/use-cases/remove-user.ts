import { RemoveUserUseCase } from '@/application/use-cases'
import { makePgUserRepository } from '@/main/factories/infra/repositories/postgres'

export const makeRemoveUserUseCase = (): RemoveUserUseCase => {
  return new RemoveUserUseCase(
    makePgUserRepository()
  )
}
