import { RegisterUserController } from '@/presentation/controllers/user'
import { makeRegisterUserUseCase } from '@/main/factories/application/use-cases/user'

export const makeRegisterUserController = (): RegisterUserController => {
  return new RegisterUserController(
    makeRegisterUserUseCase()
  )
}
