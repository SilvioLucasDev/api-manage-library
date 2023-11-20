import { RegisterBookController } from '@/presentation/controllers'
import { makeRegisterBookUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterBookController = (): RegisterBookController => {
  return new RegisterBookController(
    makeRegisterBookUseCase()
  )
}
