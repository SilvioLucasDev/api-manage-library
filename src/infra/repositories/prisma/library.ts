import { type GetLibrary, type SaveLibrary } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/prisma/helpers/connection'

export class PgLibraryRepository implements SaveLibrary, GetLibrary {
  async save({ id, name }: SaveLibrary.Input): Promise<void> {
    await prisma.library.create({
      data: { id, name }
    })
  }

  async get({ id }: GetLibrary.Input): Promise<GetLibrary.Output> {
    const library = await prisma.library.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true
      }
    })
    if (library !== null && library !== undefined) {
      return {
        id: library.id,
        name: library.name
      }
    }
  }
}
