import { PgBookRepository } from '@/infra/repositories/postgres'

export const makePgBookRepository = (): PgBookRepository => {
  return new PgBookRepository()
}
