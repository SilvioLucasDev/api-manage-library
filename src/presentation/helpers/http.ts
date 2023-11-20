import { ServerError } from '@/presentation/errors'

export type HttpResponse<T = object | Error | null> = {
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

export const ok = <T = object>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const created = <T = object>(data: T): HttpResponse<T> => ({
  statusCode: 201,
  data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: null
})
