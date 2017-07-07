import { Record } from 'immutable'
import { Action, handleActions } from 'redux-actions'

import { AUTH } from './Actions'
import { AuthenticationState, authentication } from './State'

export const handleAuthAction = (state: AuthenticationState, action: Action<AUTH>) => {
  const { userId } = action.payload
  return state.with({ userId, authenticated: true })
}

export default handleActions({
  [AUTH]: handleAuthAction,
}, authentication)

// export default (state: AuthenticationState, action: Action): AuthenticationState => {
//   switch (action.type) {
//     case 'AUTH':
//       return state.with({ userId: action.payload.userId })
//   }
//   return state
//}