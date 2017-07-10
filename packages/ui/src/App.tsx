import * as React from 'react'
import Example from '@react-typescript/common'
import { ConnectedRouter } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'

import configureStore, { history } from './Common/ConfigureStore'
import apolloClient from './Common/ApolloClient'
import Routes from './Common/Routes'
import './App.scss'

const example = new Example()
console.log(example.greet('Jacek'))

const store = configureStore()

export default () =>
  <ApolloProvider store={store} client={apolloClient}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </ApolloProvider>
