import { type UUIDGenerator } from '@/application/contracts/adapters'

export class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly libraryId: string
  ) { }

  static create({ name, email, libraryId }: CreateInput, crypto: UUIDGenerator): User {
    const id = crypto.uuid()
    return new User(id, name, email, libraryId)
  }
}

type CreateInput = {
  name: string
  email: string
  libraryId: string
}
