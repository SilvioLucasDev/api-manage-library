import { type BookUser } from '@/domain/entities'

export interface SaveBookUser {
  save: (bookUser: SaveBookUser.Input) => Promise<void>
}

export namespace SaveBookUser {
  export type Input = BookUser
}

export interface GetBookUser {
  get: (input: GetBookUser.Input) => Promise<GetBookUser.Output>
}

export namespace GetBookUser {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    bookId: string
    userId: string
    returnDate: Date
    returned: boolean
  } | undefined
}

export interface UpdateReturnedBookUser {
  updateReturned: (book: UpdateReturnedBookUser.Input) => Promise<void>
}

export namespace UpdateReturnedBookUser {
  export type Input = {
    id: string
    bookId: string
    returned: boolean
  }
}
