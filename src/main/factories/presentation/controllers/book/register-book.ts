import { RegisterBookController } from '@/presentation/controllers/book'
import { makeRegisterBookUseCase } from '@/main/factories/application/use-cases/book'

export const makeRegisterBookController = (): RegisterBookController => {
  return new RegisterBookController(
    makeRegisterBookUseCase()
  )
}
