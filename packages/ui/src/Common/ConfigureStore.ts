import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducer from './Reducer'
import { createState, State } from './State'
import { AuthenticationState } from '../Authentication/State'
import apolloClient from './ApolloClient'

const devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f

export const history = createHistory()

export default function configureStore(initialState = createState()) {
  const enhancer = compose(
    applyMiddleware(
      apolloClient.middleware(),
      routerMiddleware(history)
    ),
    devtools
  ) as GenericStoreEnhancer

  return createStore(reducer, initialState, enhancer)
}
