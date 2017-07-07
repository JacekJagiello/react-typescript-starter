import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducer from './Reducer'
import { createState } from './State'

const devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f

export const history = createHistory()

export default function configureStore(initialState = createState()) {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(history)),
    devtools
  ) as GenericStoreEnhancer

  return createStore(reducer, initialState, enhancer)
}
