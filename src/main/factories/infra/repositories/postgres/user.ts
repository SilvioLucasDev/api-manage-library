import { PgUserRepository } from '@/infra/repositories/prisma'

export const makePgUserRepository = (): PgUserRepository => {
  return new PgUserRepository()
}
