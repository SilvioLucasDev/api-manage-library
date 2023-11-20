import { type DeleteAuthor, type SaveAuthor } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgAuthorRepository implements SaveAuthor, DeleteAuthor {
  async save({ id, name, birthDate, nationality, libraryId }: SaveAuthor.Input): Promise<void> {
    const birthDateIso = new Date(birthDate).toISOString()
    await prisma.author.create({
      data: { id, name, birth_date: birthDateIso, nationality, library_id: libraryId }
    })
  }

  async delete({ id }: DeleteAuthor.Input): Promise<void> {
    await prisma.author.delete({
      where: { id }
    })
  }
}
