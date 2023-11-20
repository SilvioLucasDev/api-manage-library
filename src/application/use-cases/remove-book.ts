import { type GetBook, type DeleteBook } from '@/application/contracts/repositories'
import { BookNotFoundError } from '@/application/errors'

export class RemoveBookUseCase {
  constructor(
    private readonly bookRepository: DeleteBook & GetBook
  ) { }

  async execute({ bookId }: Input): Promise<void> {
    const book = await this.bookRepository.get({ id: bookId })
    if (book === undefined) throw new BookNotFoundError()
    await this.bookRepository.delete({ id: bookId })
  }
}

type Input = {
  bookId: string
}
