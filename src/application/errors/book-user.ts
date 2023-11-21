export class BookUserNotFoundError extends Error {
  constructor() {
    super('BookUser not found')
    this.name = 'BookUserNotFoundError'
  }
}

export class BookAlreadyReturned extends Error {
  constructor() {
    super('Book already returned')
    this.name = 'BookAlreadyReturned'
  }
}
