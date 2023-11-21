import { type UUIDGenerator } from '@/application/contracts/adapters'

export class BookUser {
  constructor(
    readonly id: string,
    readonly bookId: string,
    readonly userId: string,
    readonly returnDate: Date,
    readonly returned?: boolean
  ) { }

  static create({ bookId, userId }: CreateInput, crypto: UUIDGenerator): BookUser {
    const id = crypto.uuid()
    const returnDate = new Date()
    returnDate.setDate(returnDate.getDate() + 10)
    return new BookUser(id, bookId, userId, returnDate)
  }

  static updateReturn({ id, bookId }: UpdateReturnInput): UpdateReturnOutput {
    return {
      id,
      bookId,
      returned: true
    }
  }
}

type CreateInput = {
  bookId: string
  userId: string
}

type UpdateReturnInput = {
  id: string
  bookId: string
}

type UpdateReturnOutput = {
  id: string
  bookId: string
  returned: boolean
}
