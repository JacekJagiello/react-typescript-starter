import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphqlExpress } from 'graphql-server-express'
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql'

let count = 0

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: () => count
      }
    }
  })
})

const PORT = 3000
var app = express()
app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

const server = app.listen(PORT,() => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host ? host : 'localhost', port)
})