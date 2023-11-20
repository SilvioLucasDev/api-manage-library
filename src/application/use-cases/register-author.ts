import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type SaveAuthor } from '@/application/contracts/repositories'
import { Author } from '@/domain/entities'

export class RegisterAuthorUseCase {
  constructor(
    private readonly authorRepository: SaveAuthor,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ name, birthDate, nationality, libraryId }: Input): Promise<Output> {
    const author = Author.create({ name, birthDate, nationality, libraryId }, this.crypto)
    await this.authorRepository.save(author)
    return { authorId: author.id }
  }
}

type Input = {
  name: string
  birthDate: Date
  nationality: string
  libraryId: string
}

type Output = {
  authorId: string
}
