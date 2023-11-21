import { type GetAuthor, type DeleteAuthor } from '@/application/contracts/repositories'
import { AuthorNotFoundError } from '@/application/errors'

export class RemoveAuthorUseCase {
  constructor(
    private readonly authorRepository: DeleteAuthor & GetAuthor
  ) { }

  async execute({ authorId }: Input): Promise<void> {
    const authorExists = await this.authorRepository.get({ id: authorId })
    if (!authorExists) throw new AuthorNotFoundError()
    await this.authorRepository.delete({ id: authorId })
  }
}

type Input = {
  authorId: string
}
