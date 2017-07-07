import { Record } from 'immutable'

interface IAuthenticationState {
  readonly authenticated?: boolean
  readonly userId?: string
  readonly name?: string
  readonly email?: string
  readonly picture?: string
}

const defaults = {
  authenticated: false,
  userId: '',
  name: '',
  email: '',
  picture: ''
}

export class AuthenticationState extends Record(defaults) implements IAuthenticationState {
  readonly authenticated?: boolean
  readonly userId?: string
  readonly name?: string
  readonly email?: string
  readonly picture?: string

  constructor(params?: IAuthenticationState) {
    params ? super(params) : super()
  }

  with(values: IAuthenticationState) { return this.merge(values) as this }
}

export const authentication = new AuthenticationState(defaults)
