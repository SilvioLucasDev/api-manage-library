import { RegisterLibraryController } from '@/presentation/controllers'
import { makeRegisterLibraryUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterLibraryController = (): RegisterLibraryController => {
  return new RegisterLibraryController(
    makeRegisterLibraryUseCase()
  )
}
