import { type Library } from '@/domain/entities'

export interface SaveLibrary {
  save: (library: SaveLibrary.Input) => Promise<void>
}

export namespace SaveLibrary {
  export type Input = Library
}
