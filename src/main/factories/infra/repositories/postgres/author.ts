import { PgAuthorRepository } from '@/infra/repositories/postgres'

export const makePgAuthorRepository = (): PgAuthorRepository => {
  return new PgAuthorRepository()
}
