import { GetBooksUseCase } from '@/application/use-cases/book'
import { makePgBookRepository } from '@/main/factories/infra/repositories/prisma'

export const makeGetBooksUseCase = (): GetBooksUseCase => {
  return new GetBooksUseCase(
    makePgBookRepository()
  )
}
