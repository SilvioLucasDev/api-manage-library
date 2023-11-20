import { RegisterAuthorController } from '@/presentation/controllers'
import { makeRegisterAuthorUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterAuthorController = (): RegisterAuthorController => {
  return new RegisterAuthorController(
    makeRegisterAuthorUseCase()
  )
}
