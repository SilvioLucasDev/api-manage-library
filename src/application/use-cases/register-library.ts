import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type SaveLibrary } from '@/application/contracts/repositories'
import { Library } from '@/domain/entities'

export class RegisterLibraryUseCase {
  constructor(
    private readonly libraryRepository: SaveLibrary,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ name }: Input): Promise<void> {
    const library = Library.create({ name }, this.crypto)
    await this.libraryRepository.save(library)
  }
}

type Input = {
  name: string
}
