import { AuthorRouter, BookRouter, LibraryRouter } from '@/main/routes'
import { makeExpressAdapter } from '@/main/factories/presentation/adapters'

import { type Application } from 'express'
import { type Server } from 'http'

export const makeHttpServer = (app: Application): Server => {
  const httpServer = makeExpressAdapter(app)
  new LibraryRouter(httpServer)
  new AuthorRouter(httpServer)
  new BookRouter(httpServer)
  return httpServer.listen()
}
