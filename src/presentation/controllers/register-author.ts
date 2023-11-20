import { badRequest, serverError, type HttpResponse, created } from '@/presentation/helpers'
import { type RegisterAuthorUseCase } from '@/application/use-cases'
import { Date as DateFormat, Required, RequiredString, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

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
      console.log(error)
      return serverError(error as Error)
    }
  }

  private validate({ name, birthDate, nationality, libraryId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      new RequiredString(name, 'name'),
      new Required(birthDate, 'birthDate'),
      new DateFormat(birthDate, 'birthDate'),
      new RequiredString(nationality, 'nationality'),
      new RequiredString(libraryId, 'libraryId')
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
