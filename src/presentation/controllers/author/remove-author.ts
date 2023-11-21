import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type RemoveAuthorUseCase } from '@/application/use-cases/author'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { AuthorNotFoundError } from '@/application/errors'

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
      if (error instanceof AuthorNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ authorId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: authorId, fieldName: 'authorId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  authorId: string
}

type Model = Error | null
