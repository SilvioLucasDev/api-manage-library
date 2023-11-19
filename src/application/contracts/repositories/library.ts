import { type Library } from '@/domain/entities'

export interface SaveLibrary {
  save: (grade: SaveLibrary.Input) => Promise<void>
}

export namespace SaveLibrary {
  export type Input = Library
}
