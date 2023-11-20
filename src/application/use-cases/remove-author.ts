import { type DeleteAuthor } from '@/application/contracts/repositories'

export class RemoveAuthorUseCase {
  constructor(
    private readonly authorRepository: DeleteAuthor
  ) { }

  async execute({ authorId }: Input): Promise<void> {
    await this.authorRepository.delete({ id: authorId })
  }
}

type Input = {
  authorId: string
}
