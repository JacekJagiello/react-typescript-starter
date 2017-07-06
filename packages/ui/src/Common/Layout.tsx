import * as React from 'react'
import Navigation from '../Navigation'

const defaultLayout = Component => props =>
  <div>
    <Navigation title="React-Typescript Starter" />
    <div style={{ padding: '30px' }}>
      <Component {...props} />
    </div>
  </div>

export default defaultLayout
