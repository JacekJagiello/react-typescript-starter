import * as React from 'react'
import Example from '@react-typescript/common'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import configureStore, { history } from './Common/ConfigureStore'
import Routes from './Common/Routes'
import './App.scss'

const example = new Example()
console.log(example.greet('Jacek'))

const store = configureStore()

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
