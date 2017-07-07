import { Record, Map } from 'immutable'
import { combineReducers } from 'redux-immutable'
/* tslint:disable no-var-requires */
const { routerReducer } = require('react-router-redux')

import authentication from '../Authentication/Reducer'

export default combineReducers({
  authentication,
  router: routerReducer,
})
