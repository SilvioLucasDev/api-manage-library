import { type Library } from '@/domain/entities'

export interface SaveLibrary {
  save: (library: SaveLibrary.Input) => Promise<void>
}

export namespace SaveLibrary {
  export type Input = Library
}

export interface GetLibrary {
  get: (input: GetLibrary.Input) => Promise<GetLibrary.Output>
}

export namespace GetLibrary {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    name: string
  } | undefined
}
