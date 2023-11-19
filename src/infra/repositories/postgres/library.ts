import { type SaveLibrary } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgLibraryRepository implements SaveLibrary {
  async save({ id, name }: SaveLibrary.Input): Promise<void> {
    await prisma.library.create({
      data: { id, name }
    })
  }
}
