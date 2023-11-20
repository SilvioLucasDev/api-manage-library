import { type GetAuthor, type DeleteAuthor } from '@/application/contracts/repositories'
import { AuthorNotFoundError } from '@/application/errors'

export class RemoveAuthorUseCase {
  constructor(
    private readonly authorRepository: DeleteAuthor & GetAuthor
  ) { }

  async execute({ authorId }: Input): Promise<void> {
    const author = await this.authorRepository.get({ id: authorId })
    if (author === undefined) throw new AuthorNotFoundError()
    await this.authorRepository.delete({ id: authorId })
  }
}

type Input = {
  authorId: string
}
