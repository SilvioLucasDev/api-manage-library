import { PgLibraryRepository } from '@/infra/repositories/postgres'

export const makePgLibraryRepository = (): PgLibraryRepository => {
  return new PgLibraryRepository()
}
