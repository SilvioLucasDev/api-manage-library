import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type RemoveAuthorUseCase } from '@/application/use-cases'
import { RequiredString, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

export class RemoveAuthorController implements Controller {
  constructor(
    private readonly removeAuthorUseCase: RemoveAuthorUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      await this.removeAuthorUseCase.execute(httpRequest)
      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }

  private validate({ authorId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      new RequiredString(authorId, 'authorId')
    ]).validate()
  }
}

type HttpRequest = {
  authorId: string
}

type Model = Error | null
