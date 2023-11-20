import { type Author } from '@/domain/entities'

export interface SaveAuthor {
  save: (author: SaveAuthor.Input) => Promise<void>
}

export namespace SaveAuthor {
  export type Input = Author
}

export interface GetAuthor {
  get: (input: GetAuthor.Input) => Promise<GetAuthor.Output>
}

export namespace GetAuthor {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    name: string
    birthDate: Date
    nationality: string
    libraryId: string
  } | undefined
}

export interface DeleteAuthor {
  delete: (author: DeleteAuthor.Input) => Promise<void>
}

export namespace DeleteAuthor {
  export type Input = {
    id: string
  }
}
