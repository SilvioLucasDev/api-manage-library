import { type Book } from '@/domain/entities'

export interface SaveBook {
  save: (book: SaveBook.Input) => Promise<void>
}

export namespace SaveBook {
  export type Input = Book
}

export interface GetBook {
  get: (input: GetBook.Input) => Promise<GetBook.Output>
}

export namespace GetBook {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    title: string
    gender: string
    yearPublication: string
    amount: number
    authorId: string
    libraryId: string
    availableQuantity: number
  } | undefined
}

export interface DeleteBook {
  delete: (book: DeleteBook.Input) => Promise<void>
}

export namespace DeleteBook {
  export type Input = {
    id: string
  }
}

export interface GetByFilterBook {
  getByFilter: (input: GetByFilterBook.Input) => Promise<GetByFilterBook.Output>
}

export namespace GetByFilterBook {
  export type Input = {
    search?: string
    borrowedBooks?: string
    booksAvailable?: string
    libraryId: string
  }

  export type Output = Array<{
    id: string
    title: string
    gender: string
    yearPublication: string
    amount: number
    availableQuantity: number
    author: string
    library: string
  }> | undefined
}
