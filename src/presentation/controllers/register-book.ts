import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type RegisterBookUseCase } from '@/application/use-cases'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

export class RegisterBookController implements Controller {
  constructor(
    private readonly registerBookUseCase: RegisterBookUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const bookId = await this.registerBookUseCase.execute(httpRequest)
      return created<object>(bookId)
    } catch (error) {
      console.log(error)
      return serverError(error as Error)
    }
  }

  private validate({ title, gender, authorId, yearPublication, amount, libraryId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: title, fieldName: 'title' }).required().requiredString().build(),
      ...Builder.of({ value: gender, fieldName: 'gender' }).required().requiredString().build(),
      ...Builder.of({ value: yearPublication, fieldName: 'yearPublication' }).required().requiredString().onlyNumber().build(),
      ...Builder.of({ value: amount, fieldName: 'amount' }).required().requiredNumber().build(),
      ...Builder.of({ value: authorId, fieldName: 'authorId' }).required().requiredString().build(),
      ...Builder.of({ value: libraryId, fieldName: 'libraryId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  title: string
  gender: string
  yearPublication: string
  amount: number
  authorId: string
  libraryId: string
}

type Model = Error | object
