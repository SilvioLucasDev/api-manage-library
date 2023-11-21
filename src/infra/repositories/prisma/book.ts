import { type GetBook, type DeleteBook, type SaveBook, type GetByFilterBook } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/prisma/helpers/connection'

export class PgBookRepository implements SaveBook, GetBook, DeleteBook, GetByFilterBook {
  async save({ id, title, gender, yearPublication, amount, availableQuantity, authorId, libraryId }: SaveBook.Input): Promise<void> {
    await prisma.book.create({
      data: { id, title, gender, year_publication: yearPublication, amount, available_quantity: availableQuantity, author_id: authorId, library_id: libraryId }
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
        availableQuantity: book.available_quantity
      }
    }
  }

  async delete({ id }: DeleteBook.Input): Promise<void> {
    await prisma.book.delete({
      where: { id }
    })
  }

  async getByFilter({ search, booksAvailable, borrowedBooks, libraryId }: GetByFilterBook.Input): Promise<GetByFilterBook.Output> {
    const books = await prisma.book.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search
            }
          },
          {
            gender: {
              contains: search
            }
          },
          {
            Author: {
              name: {
                contains: search
              }
            }
          }
        ],
        AND: [
          {
            library_id: libraryId
          },
          {
            available_quantity: booksAvailable ? { gt: 0 } : undefined
          },
          {
            available_quantity: borrowedBooks ? { lt: prisma.book.fields.amount } : undefined
          }
        ]
      },
      select: {
        id: true,
        title: true,
        gender: true,
        year_publication: true,
        amount: true,
        author_id: true,
        library_id: true,
        available_quantity: true,
        Author: {
          select: { name: true }
        },
        Library: {
          select: { name: true }
        }
      }
    })

    if (books !== null && books !== undefined) {
      return books.map((book) => ({
        id: book.id,
        title: book.title,
        gender: book.gender,
        yearPublication: book.year_publication,
        amount: book.amount,
        availableQuantity: book.available_quantity,
        author: book.Author.name,
        library: book.Library.name
      }))
    }
  }
}
