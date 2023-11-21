import { type GetBookUser, type UpdateReturnedBookUser } from '@/application/contracts/repositories'
import { BookAlreadyReturned, BookUserNotFoundError } from '@/application/errors'
import { BookUser } from '@/domain/entities'

export class MakeReturnUseCase {
  constructor(
    private readonly bookUserRepository: GetBookUser & UpdateReturnedBookUser
  ) { }

  async execute({ loanId }: Input): Promise<void> {
    const bookUserExists = await this.bookUserRepository.get({ id: loanId })
    if (!bookUserExists) throw new BookUserNotFoundError()
    if (bookUserExists.returned) throw new BookAlreadyReturned()
    const bookUser = BookUser.updateReturn({ id: bookUserExists.id, bookId: bookUserExists.bookId })
    await this.bookUserRepository.updateReturned(bookUser)
  }
}

type Input = {
  loanId: string
}
