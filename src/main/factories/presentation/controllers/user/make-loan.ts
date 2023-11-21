import { MakeLoanController } from '@/presentation/controllers/user'
import { makeMakeLoanUseCase } from '@/main/factories/application/use-cases/user'

export const makeMakeLoanController = (): MakeLoanController => {
  return new MakeLoanController(
    makeMakeLoanUseCase()
  )
}
