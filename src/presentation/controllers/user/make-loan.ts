import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type MakeLoanUseCase } from '@/application/use-cases/user'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { BookIsNotAvailableError, BookNotFoundError, UserNotFoundError } from '@/application/errors'

export class MakeLoanController implements Controller {
  constructor(
    private readonly makeLoanUseCase: MakeLoanUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const loanId = await this.makeLoanUseCase.execute(httpRequest)
      return created<object>(loanId)
    } catch (error) {
      if (
        error instanceof BookNotFoundError ||
        error instanceof BookIsNotAvailableError ||
        error instanceof UserNotFoundError
      ) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ bookId, userId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: bookId, fieldName: 'bookId' }).required().requiredString().build(),
      ...Builder.of({ value: userId, fieldName: 'userId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  bookId: string
  userId: string
}

type Model = Error | object
