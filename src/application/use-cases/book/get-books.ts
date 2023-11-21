import { type GetByFilterBook } from '@/application/contracts/repositories'

export class GetBooksUseCase {
  constructor(
    private readonly bookRepository: GetByFilterBook
  ) { }

  async execute({ search, borrowedBooks, booksAvailable, libraryId }: Input): Promise<Output> {
    return await this.bookRepository.getByFilter({ search, borrowedBooks, booksAvailable, libraryId })
  }
}

type Input = {
  search?: string
  borrowedBooks?: string
  booksAvailable?: string
  libraryId: string
}

type Output = Array<object> | undefined
