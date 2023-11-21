import { PgLibraryRepository } from '@/infra/repositories/prisma'

export const makePgLibraryRepository = (): PgLibraryRepository => {
  return new PgLibraryRepository()
}
