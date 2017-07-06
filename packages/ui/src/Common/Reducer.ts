import { combineReducers } from 'redux-immutable'
/* tslint:disable no-var-requires */
const { routerReducer } = require('react-router-redux')

export default combineReducers({
  authentication: (state, action) => {
    return state
  },
  router: routerReducer,
})
