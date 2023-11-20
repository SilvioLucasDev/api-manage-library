import { type Author } from '@/domain/entities'

export interface SaveAuthor {
  save: (grade: SaveAuthor.Input) => Promise<void>
}

export namespace SaveAuthor {
  export type Input = Author
}
