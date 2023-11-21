import { RemoveUserUseCase } from '@/application/use-cases/user'
import { makePgUserRepository } from '@/main/factories/infra/repositories/prisma'

export const makeRemoveUserUseCase = (): RemoveUserUseCase => {
  return new RemoveUserUseCase(
    makePgUserRepository()
  )
}
