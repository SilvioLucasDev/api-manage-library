import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetLibrary, type SaveUser } from '@/application/contracts/repositories'
import { User } from '@/domain/entities'
import { LibraryNotFoundError } from '@/application/errors'

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: SaveUser,
    private readonly libraryRepository: GetLibrary,
    private readonly crypto: UUIDGenerator
  ) { }

  async execute({ name, email, libraryId }: Input): Promise<Output> {
    const libraryExists = await this.libraryRepository.get({ id: libraryId })
    if (!libraryExists) throw new LibraryNotFoundError()
    const user = User.create({ name, email, libraryId }, this.crypto)
    await this.userRepository.save(user)
    return { userId: user.id }
  }
}

type Input = {
  name: string
  email: string
  libraryId: string
}

type Output = {
  userId: string
}
