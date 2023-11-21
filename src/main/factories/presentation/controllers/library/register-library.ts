import { RegisterLibraryController } from '@/presentation/controllers/library'
import { makeRegisterLibraryUseCase } from '@/main/factories/application/use-cases/library'

export const makeRegisterLibraryController = (): RegisterLibraryController => {
  return new RegisterLibraryController(
    makeRegisterLibraryUseCase()
  )
}
