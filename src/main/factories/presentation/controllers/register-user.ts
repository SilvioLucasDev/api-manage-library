import { RegisterUserController } from '@/presentation/controllers'
import { makeRegisterUserUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterUserController = (): RegisterUserController => {
  return new RegisterUserController(
    makeRegisterUserUseCase()
  )
}
