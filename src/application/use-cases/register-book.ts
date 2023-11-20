import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type SaveBook } from '@/application/contracts/repositories'
import { Book } from '@/domain/entities'

export class RegisterBookUseCase {
  constructor(
    private readonly bookRepository: SaveBook,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ title, gender, yearPublication, amount, authorId, libraryId }: Input): Promise<Output> {
    const book = Book.create({ title, gender, yearPublication, amount, authorId, libraryId }, this.crypto)
    await this.bookRepository.save(book)
    return { bookId: book.id }
  }
}

type Input = {
  title: string
  gender: string
  yearPublication: string
  amount: number
  authorId: string
  libraryId: string
}

type Output = {
  bookId: string
}
