import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { State } from './State'
import reducer from './Reducer'

let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f

export const history = createHistory()

export default function configureStore(initialState = new State()) {
  const enhancer = compose(applyMiddleware(routerMiddleware(history)), devtools)
  return createStore(reducer, initialState, enhancer)
}
