import { type UpdateReturnedBookUser, type SaveBookUser, type GetBookUser } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/prisma/helpers/connection'

export class PgBookUserRepository implements SaveBookUser, GetBookUser, UpdateReturnedBookUser {
  async save({ id, bookId, userId, returnDate }: SaveBookUser.Input): Promise<void> {
    await prisma.bookUser.create({
      data: { id, book_id: bookId, user_id: userId, return_date: returnDate }
    })

    await prisma.book.update({
      where: { id: bookId },
      data: { available_quantity: { decrement: 1 } }
    })
  }

  async get({ id }: GetBookUser.Input): Promise<GetBookUser.Output> {
    const bookUser = await prisma.bookUser.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        book_id: true,
        user_id: true,
        return_date: true,
        returned: true
      }
    })
    if (bookUser !== null && bookUser !== undefined) {
      return {
        id: bookUser.id,
        bookId: bookUser.book_id,
        userId: bookUser.user_id,
        returnDate: bookUser.return_date,
        returned: bookUser.returned ?? undefined
      }
    }
  }

  async updateReturned({ id, returned }: UpdateReturnedBookUser.Input): Promise<void> {
    await prisma.bookUser.update({
      where: { id }, data: { returned }
    })
  }
}
