import { MakeReturnController } from '@/presentation/controllers/user'
import { makeMakeReturnUseCase } from '@/main/factories/application/use-cases/user'

export const makeMakeReturnController = (): MakeReturnController => {
  return new MakeReturnController(
    makeMakeReturnUseCase()
  )
}
