import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Library {
  constructor(
    readonly id: string,
    readonly name: string
  ) { }

  static create({ name }: Input, crypto: UUIDGenerator): Library {
    const id = crypto.uuid()
    return new Library(id, name)
  }
}

type Input = {
  name: string
}
