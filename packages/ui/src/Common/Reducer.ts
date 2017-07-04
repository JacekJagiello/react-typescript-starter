import { combineReducers } from 'redux-immutable'
const { routerReducer } = require('react-router-redux')

export default combineReducers({
  authentication: (state, action) => {
    return state
  },
  router: routerReducer,
})
