import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Author {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly birthDate: Date,
    readonly nationality: string,
    readonly libraryId: string
  ) { }

  static create({ name, birthDate, nationality, libraryId }: Input, crypto: UUIDGenerator): Author {
    const id = crypto.uuid()
    return new Author(id, name, birthDate, nationality, libraryId)
  }
}

type Input = {
  name: string
  birthDate: Date
  nationality: string
  libraryId: string
}
