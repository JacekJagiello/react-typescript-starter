import { Record, Map } from 'immutable'
import { AuthenticationState, authentication } from '../Authentication/State'

interface StateType {
  authentication: AuthenticationState,
}

const defualts = {
  authentication,
  apollo: {},
  router: {},
}

export class State extends Record(defualts) implements StateType {
  readonly authentication: AuthenticationState
  readonly router: any
  readonly stateLoading: any

  constructor(params?: StateType) {
    params ? super(params) : super()
  }

  with(values: StateType) { return this.merge(values) as this }
}

export function createState(): State {
  return new State(defualts)
}
