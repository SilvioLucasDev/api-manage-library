export class LibraryNotFoundError extends Error {
  constructor() {
    super('Library not found')
    this.name = 'LibraryNotFoundError'
  }
}
