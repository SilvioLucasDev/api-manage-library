import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Book {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly gender: string,
    readonly yearPublication: string,
    readonly amount: number,
    readonly authorId: string,
    readonly libraryId: string,
    readonly availableQuantity?: string
  ) { }

  static create({ title, gender, yearPublication, amount, authorId, libraryId }: Input, crypto: UUIDGenerator): Book {
    const id = crypto.uuid()
    return new Book(id, title, gender, yearPublication, amount, authorId, libraryId)
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
