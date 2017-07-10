import { ApolloClient, createNetworkInterface } from 'react-apollo'

const apolloClient = new ApolloClient({
  connectToDevTools: true,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  }),
})

export const reducer = apolloClient.reducer()

export default apolloClient