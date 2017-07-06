import * as React from 'react'
import { Switch, Route } from 'react-router'
import defaultLayout from './Layout'

const Home = () => <h3>Home</h3>
const Dashboard = () => <h3>Dashboard</h3>

export const Routes = {
  home: '/',
  dashboard: '/dashboard',
}

export default () =>
  <Switch>
    <Route exact path={Routes.home} component={defaultLayout(Home)} />
    <Route path={Routes.dashboard} component={defaultLayout(Dashboard)} />
  </Switch>
