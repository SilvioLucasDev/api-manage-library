import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type MakeReturnUseCase } from '@/application/use-cases/user'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { BookAlreadyReturned, BookUserNotFoundError } from '@/application/errors'

export class MakeReturnController implements Controller {
  constructor(
    private readonly makeLoanUseCase: MakeReturnUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      await this.makeLoanUseCase.execute(httpRequest)
      return noContent()
    } catch (error) {
      console.log(error)
      if (error instanceof BookUserNotFoundError || error instanceof BookAlreadyReturned) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ loanId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: loanId, fieldName: 'loanId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  loanId: string
}

type Model = Error | null
