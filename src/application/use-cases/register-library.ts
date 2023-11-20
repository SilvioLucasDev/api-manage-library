import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type SaveLibrary } from '@/application/contracts/repositories'
import { Library } from '@/domain/entities'

export class RegisterLibraryUseCase {
  constructor(
    private readonly libraryRepository: SaveLibrary,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ name }: Input): Promise<Output> {
    const library = Library.create({ name }, this.crypto)
    await this.libraryRepository.save(library)
    return { libraryId: library.id }
  }
}

type Input = {
  name: string
}

type Output = {
  libraryId: string
}
