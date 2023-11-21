import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Book {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly gender: string,
    readonly yearPublication: string,
    readonly amount: number,
    readonly availableQuantity: number,
    readonly authorId: string,
    readonly libraryId: string
  ) { }

  static create({ title, gender, yearPublication, amount, authorId, libraryId }: CreateInput, crypto: UUIDGenerator): Book {
    const id = crypto.uuid()
    const availableQuantity = amount
    return new Book(id, title, gender, yearPublication, amount, availableQuantity, authorId, libraryId)
  }
}

type CreateInput = {
  title: string
  gender: string
  yearPublication: string
  amount: number
  authorId: string
  libraryId: string
}
