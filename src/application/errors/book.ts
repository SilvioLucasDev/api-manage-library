export class BookNotFoundError extends Error {
  constructor() {
    super('Book not found')
    this.name = 'BookNotFoundError'
  }
}

export class BookIsNotAvailableError extends Error {
  constructor() {
    super('Book is not available')
    this.name = 'BookIsNotAvailableError'
  }
}
