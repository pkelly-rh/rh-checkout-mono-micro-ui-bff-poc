import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { CartBrokerResolver } from './cart-broker/cartBrokerResolver'
import {buildSchema} from "type-graphql"

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
}

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

async function main () {
  const schema = await buildSchema({
    resolvers: [CartBrokerResolver],
  });

  const server = new ApolloServer({
    schema
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })
  console.log(`🚀  Server ready at: ${url}`)
}
main()