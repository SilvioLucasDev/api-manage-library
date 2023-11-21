import { type GetUser, type DeleteUser, type SaveUser } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/prisma/helpers/connection'

export class PgUserRepository implements SaveUser, GetUser, DeleteUser {
  async save({ id, name, email, libraryId }: SaveUser.Input): Promise<void> {
    await prisma.user.create({
      data: { id, name, email, library_id: libraryId }
    })
  }

  async get({ id }: GetUser.Input): Promise<GetUser.Output> {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        library_id: true
      }
    })
    if (user !== null && user !== undefined) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        libraryId: user.library_id
      }
    }
  }

  async delete({ id }: DeleteUser.Input): Promise<void> {
    await prisma.user.delete({
      where: { id }
    })
  }
}
