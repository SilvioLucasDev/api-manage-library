import { type GetBook, type DeleteBook, type SaveBook } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgBookRepository implements SaveBook, GetBook, DeleteBook {
  async save({ id, title, gender, yearPublication, amount, authorId, libraryId }: SaveBook.Input): Promise<void> {
    await prisma.book.create({
      data: { id, title, gender, year_publication: yearPublication, amount, author_id: authorId, library_id: libraryId }
    })
  }

  async get({ id }: GetBook.Input): Promise<GetBook.Output> {
    const book = await prisma.book.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        title: true,
        gender: true,
        year_publication: true,
        amount: true,
        author_id: true,
        library_id: true,
        available_quantity: true
      }
    })
    if (book !== null && book !== undefined) {
      return {
        id: book.id,
        title: book.title,
        gender: book.gender,
        yearPublication: book.year_publication,
        amount: book.amount,
        authorId: book.author_id,
        libraryId: book.library_id,
        availableQuantity: book.available_quantity ?? undefined
      }
    }
  }

  async delete({ id }: DeleteBook.Input): Promise<void> {
    await prisma.book.delete({
      where: { id }
    })
  }
}
