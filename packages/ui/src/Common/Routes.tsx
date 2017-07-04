import * as React from 'react'
import { Switch, Route } from 'react-router'
import defaultLayout from './Layout'

export enum Routes {
  Home = '/',
  Dashboard = '/dashboard',
}

export default () =>
  <Switch>
    <Route
      path={Routes.Home}
      exact
      component={defaultLayout(() => <h3>Home</h3>)}
    />
    <Route
      path={Routes.Dashboard}
      component={defaultLayout(() => <h3>Dashboard Alone</h3>)}
    />
  </Switch>
