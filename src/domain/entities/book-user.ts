import { type UUIDGenerator } from '@/application/contracts/adapters'

export class BookUser {
  constructor(
    readonly id: string,
    readonly bookId: string,
    readonly userId: string,
    readonly returnDate: Date,
    readonly returned?: boolean
  ) { }

  static create({ bookId, userId }: Input, crypto: UUIDGenerator): BookUser {
    const id = crypto.uuid()
    const returnDate = new Date()
    returnDate.setDate(returnDate.getDate() + 10)
    return new BookUser(id, bookId, userId, returnDate)
  }
}

type Input = {
  bookId: string
  userId: string
}
