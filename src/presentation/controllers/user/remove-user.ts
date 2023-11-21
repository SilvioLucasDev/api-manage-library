import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type RemoveUserUseCase } from '@/application/use-cases/user'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { UserNotFoundError } from '@/application/errors'

export class RemoveUserController implements Controller {
  constructor(
    private readonly removeUserUseCase: RemoveUserUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      await this.removeUserUseCase.execute(httpRequest)
      return noContent()
    } catch (error) {
      if (error instanceof UserNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ userId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: userId, fieldName: 'userId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  userId: string
}

type Model = Error | null
