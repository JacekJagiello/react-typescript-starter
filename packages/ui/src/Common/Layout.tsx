import * as React from 'react'
import Navbar from '../Navbar/Navbar'

const defaultLayout = Component => props =>
  <div>
    <Navbar title="React-Typescript Starter" />
    <div style={{ padding: '30px' }}>
      <Component {...props} />
    </div>
  </div>

export default defaultLayout
