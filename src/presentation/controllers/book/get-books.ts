import { badRequest, serverError, type HttpResponse, ok } from '@/presentation/helpers'
import { type GetBooksUseCase } from '@/application/use-cases/book'
import { ValidationBuilder as Builder, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'
import { AuthorNotFoundError, LibraryNotFoundError } from '@/application/errors'

export class GetBooksController implements Controller {
  constructor(
    private readonly getBooksUseCase: GetBooksUseCase
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      console.log(httpRequest)
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const books = await this.getBooksUseCase.execute(httpRequest)
      return ok<Array<object> | undefined>(books)
    } catch (error) {
      if (error instanceof LibraryNotFoundError || error instanceof AuthorNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate({ search, borrowedBooks, booksAvailable, libraryId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      ...Builder.of({ value: search, fieldName: 'search' }).requiredString().build(),
      ...Builder.of({ value: borrowedBooks, fieldName: 'borrowedBooks' }).requiredString().build(),
      ...Builder.of({ value: booksAvailable, fieldName: 'booksAvailable' }).requiredString().build(),
      ...Builder.of({ value: libraryId, fieldName: 'libraryId' }).required().requiredString().build()
    ]).validate()
  }
}

type HttpRequest = {
  search?: string
  borrowedBooks?: string
  booksAvailable?: string
  libraryId: string
}

type Model = Error | Array<object> | undefined
