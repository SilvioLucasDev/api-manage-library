import { ServerError } from '@/presentation/errors'

export type HttpResponse<T = object | Array<object> | Error | null | undefined> = {
  statusCode: number
  data: T
}

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error)
})

export const ok = <T = object | Array<object> | undefined>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const created = <T = object>(data: T): HttpResponse<T> => ({
  statusCode: 201,
  data
})

export const noContent = (): HttpResponse<null> => ({
  statusCode: 204,
  data: null
})
