import { PgAuthorRepository } from '@/infra/repositories/prisma'

export const makePgAuthorRepository = (): PgAuthorRepository => {
  return new PgAuthorRepository()
}
