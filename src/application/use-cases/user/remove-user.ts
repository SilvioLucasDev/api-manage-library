import { type GetUser, type DeleteUser } from '@/application/contracts/repositories'
import { UserNotFoundError } from '@/application/errors'

export class RemoveUserUseCase {
  constructor(
    private readonly userRepository: DeleteUser & GetUser
  ) { }

  async execute({ userId }: Input): Promise<void> {
    const userExists = await this.userRepository.get({ id: userId })
    if (!userExists) throw new UserNotFoundError()
    await this.userRepository.delete({ id: userId })
  }
}

type Input = {
  userId: string
}
