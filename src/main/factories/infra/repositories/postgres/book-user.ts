import { PgBookUserRepository } from '@/infra/repositories/prisma'

export const makePgBookUserRepository = (): PgBookUserRepository => {
  return new PgBookUserRepository()
}
