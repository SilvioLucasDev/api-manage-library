import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetLibrary, type GetAuthor, type SaveBook } from '@/application/contracts/repositories'
import { Book } from '@/domain/entities'
import { AuthorNotFoundError, LibraryNotFoundError } from '@/application/errors'

export class RegisterBookUseCase {
  constructor(
    private readonly bookRepository: SaveBook,
    private readonly libraryRepository: GetLibrary,
    private readonly authorRepository: GetAuthor,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ title, gender, yearPublication, amount, authorId, libraryId }: Input): Promise<Output> {
    const libraryExists = await this.libraryRepository.get({ id: libraryId })
    if (!libraryExists) throw new LibraryNotFoundError()
    const authorExists = await this.authorRepository.get({ id: authorId })
    if (!authorExists) throw new AuthorNotFoundError()
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
