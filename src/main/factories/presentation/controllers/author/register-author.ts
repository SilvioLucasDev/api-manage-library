import { RegisterAuthorController } from '@/presentation/controllers/author'
import { makeRegisterAuthorUseCase } from '@/main/factories/application/use-cases/author'

export const makeRegisterAuthorController = (): RegisterAuthorController => {
  return new RegisterAuthorController(
    makeRegisterAuthorUseCase()
  )
}
