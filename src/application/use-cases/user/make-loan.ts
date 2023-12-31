import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetUser, type GetBook, type SaveBookUser } from '@/application/contracts/repositories'
import { BookIsNotAvailableError, BookNotFoundError, UserNotFoundError } from '@/application/errors'
import { BookUser } from '@/domain/entities'

export class MakeLoanUseCase {
  constructor(
    private readonly bookUserRepository: SaveBookUser,
    private readonly bookRepository: GetBook,
    private readonly userRepository: GetUser,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ bookId, userId }: Input): Promise<Output> {
    const bookExists = await this.bookRepository.get({ id: bookId })
    if (!bookExists) throw new BookNotFoundError()
    if (bookExists.availableQuantity <= 0) throw new BookIsNotAvailableError()
    const authorExists = await this.userRepository.get({ id: userId })
    if (!authorExists) throw new UserNotFoundError()
    const bookUser = BookUser.create({ bookId, userId }, this.crypto)
    await this.bookUserRepository.save(bookUser)
    return { loanId: bookUser.id }
  }
}

type Input = {
  bookId: string
  userId: string
}

type Output = {
  loanId: string
}
