import { Record, Map } from 'immutable'
import { pick } from 'ramda'

export const State = Record({
  authentication: Map({
    authenticated: false,
    email: null,
    name: null,
    user_id: null,
    picture: null,
  }),
  router: null,
})

export function createState(auth) {
  return State({
    authentication: Map(pick(['email', 'name', 'user_id', 'picture'], auth)),
  })
}
