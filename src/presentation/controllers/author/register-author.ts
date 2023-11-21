import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type RegisterAuthorUseCase } from '@/application/use-cases/author'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { LibraryNotFoundError } from '@/application/errors'

export class RegisterAuthorController implements Controller {
  constructor(
    private readonly registerAuthorUseCase: RegisterAuthorUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const authorId = await this.registerAuthorUseCase.execute(httpRequest)
      return created<object>(authorId)
    } catch (error) {
      if (error instanceof LibraryNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ name, birthDate, nationality, libraryId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: name, fieldName: 'name' }).required().requiredString().build(),
      ...Builder.of({ value: birthDate, fieldName: 'birthDate' }).required().date().build(),
      ...Builder.of({ value: nationality, fieldName: 'nationality' }).required().requiredString().build(),
      ...Builder.of({ value: libraryId, fieldName: 'libraryId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  name: string
  birthDate: Date
  nationality: string
  libraryId: string
}

type Model = Error | object
