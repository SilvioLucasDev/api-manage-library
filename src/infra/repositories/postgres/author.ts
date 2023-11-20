import { type GetAuthor, type DeleteAuthor, type SaveAuthor } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgAuthorRepository implements SaveAuthor, GetAuthor, DeleteAuthor {
  async save({ id, name, birthDate, nationality, libraryId }: SaveAuthor.Input): Promise<void> {
    const birthDateIso = new Date(birthDate).toISOString()
    await prisma.author.create({
      data: { id, name, birth_date: birthDateIso, nationality, library_id: libraryId }
    })
  }

  async get({ id }: GetAuthor.Input): Promise<GetAuthor.Output> {
    const author = await prisma.author.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        birth_date: true,
        nationality: true,
        library_id: true
      }
    })
    if (author !== null && author !== undefined) {
      return {
        id: author.id,
        name: author.name,
        birthDate: author.birth_date,
        nationality: author.nationality,
        libraryId: author.library_id
      }
    }
  }

  async delete({ id }: DeleteAuthor.Input): Promise<void> {
    await prisma.author.delete({
      where: { id }
    })
  }
}
