import express from 'express'

const router = express.Router()

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';

import typeDefs from './type-defs.ts'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

router.use('/', expressMiddleware(server))

export default router
