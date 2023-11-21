import { PgBookRepository } from '@/infra/repositories/prisma'

export const makePgBookRepository = (): PgBookRepository => {
  return new PgBookRepository()
}
