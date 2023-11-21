import { GetBooksController } from '@/presentation/controllers/book'
import { makeGetBooksUseCase } from '@/main/factories/application/use-cases/book'

export const makeGetBooksController = (): GetBooksController => {
  return new GetBooksController(
    makeGetBooksUseCase()
  )
}
