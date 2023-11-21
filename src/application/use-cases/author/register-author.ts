import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetLibrary, type SaveAuthor } from '@/application/contracts/repositories'
import { Author } from '@/domain/entities'
import { LibraryNotFoundError } from '@/application/errors'

export class RegisterAuthorUseCase {
  constructor(
    private readonly authorRepository: SaveAuthor,
    private readonly libraryRepository: GetLibrary,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ name, birthDate, nationality, libraryId }: Input): Promise<Output> {
    const libraryExists = await this.libraryRepository.get({ id: libraryId })
    if (!libraryExists) throw new LibraryNotFoundError()
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
