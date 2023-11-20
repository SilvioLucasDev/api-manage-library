import { type Author } from '@/domain/entities'

export interface SaveAuthor {
  save: (author: SaveAuthor.Input) => Promise<void>
}

export namespace SaveAuthor {
  export type Input = Author
}

export interface DeleteAuthor {
  delete: (author: DeleteAuthor.Input) => Promise<void>
}

export namespace DeleteAuthor {
  export type Input = {
    id: string
  }
}
