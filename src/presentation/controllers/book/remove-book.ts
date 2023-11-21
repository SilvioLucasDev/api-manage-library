import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type RemoveBookUseCase } from '@/application/use-cases/book'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { BookNotFoundError } from '@/application/errors'

export class RemoveBookController implements Controller {
  constructor(
    private readonly removeBookUseCase: RemoveBookUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      await this.removeBookUseCase.execute(httpRequest)
      return noContent()
    } catch (error) {
      if (error instanceof BookNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ bookId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: bookId, fieldName: 'bookId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  bookId: string
}

type Model = Error | null
