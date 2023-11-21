import { MakeReturnUseCase } from '@/application/use-cases/user'
import { makePgBookUserRepository } from '@/main/factories/infra/repositories/prisma'

export const makeMakeReturnUseCase = (): MakeReturnUseCase => {
  return new MakeReturnUseCase(
    makePgBookUserRepository()
  )
}
