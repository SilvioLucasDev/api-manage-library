import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type RegisterLibraryUseCase } from '@/application/use-cases'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

export class RegisterLibraryController implements Controller {
  constructor(
    private readonly registerLibraryUseCase: RegisterLibraryUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const libraryId = await this.registerLibraryUseCase.execute(httpRequest)
      return created<object>(libraryId)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  private validate({ name }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: name, fieldName: 'name' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  name: string
}

type Model = Error | object
