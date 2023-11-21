import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type RegisterUserUseCase } from '@/application/use-cases'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { LibraryNotFoundError } from '@/application/errors'

export class RegisterUserController implements Controller {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const authorId = await this.registerUserUseCase.execute(httpRequest)
      return created<object>(authorId)
    } catch (error) {
      if (error instanceof LibraryNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ name, email, libraryId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: name, fieldName: 'name' }).required().requiredString().build(),
      ...Builder.of({ value: email, fieldName: 'email' }).required().requiredString().build(),
      ...Builder.of({ value: libraryId, fieldName: 'libraryId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  name: string
  email: string
  libraryId: string
}

type Model = Error | object
