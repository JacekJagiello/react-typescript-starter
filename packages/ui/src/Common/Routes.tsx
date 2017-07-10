import * as React from 'react'
import { Switch, Route } from 'react-router'
import { graphql } from 'react-apollo'
import defaultLayout from './Layout'

import * as GetScore from './query.gql'

const Home = () => <h3>Home</h3>
const Dashboard = () => <h3>Dashboard</h3>

const FeedWithData = graphql(GetScore)(Feed)

function Feed({ data }) {
  return (
    <pre>
      {JSON.stringify(data)}
    </pre>
  )
}

export const Routes = {
  home: '/',
  dashboard: '/dashboard',
}

export default () =>
  <Switch>
    <Route exact path={Routes.home} component={defaultLayout(Home)} />
    <Route path={Routes.dashboard} component={defaultLayout(FeedWithData)} />
  </Switch>
