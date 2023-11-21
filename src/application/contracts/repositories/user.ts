import { type User } from '@/domain/entities'

export interface SaveUser {
  save: (author: SaveUser.Input) => Promise<void>
}

export namespace SaveUser {
  export type Input = User
}

export interface GetUser {
  get: (input: GetUser.Input) => Promise<GetUser.Output>
}

export namespace GetUser {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    name: string
    email: string
    libraryId: string
  } | undefined
}

export interface DeleteUser {
  delete: (author: DeleteUser.Input) => Promise<void>
}

export namespace DeleteUser {
  export type Input = {
    id: string
  }
}
