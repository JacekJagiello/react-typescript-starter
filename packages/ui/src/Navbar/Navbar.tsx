import * as React from 'react'
import { push as changeRoute } from 'react-router-redux'
import { connect, DispatchProp } from 'react-redux'

import Menu from './Menu'
import { Routes } from '../Common/Routes'

interface INavbarProps {
  title?: string
}

type NavbarProps = INavbarProps & DispatchProp<any>

export class Navbar extends React.PureComponent<NavbarProps, any> {
  public static defaultProps: NavbarProps = {
    title: '',
    dispatch: null,
  }

  public render() {
    return (
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">
            {this.props.title}
          </div>
          <span className="pt-navbar-divider" />
          <Menu onClick={this.handleClick.bind(this)} />
        </div>
        <div className="pt-navbar-group pt-align-right">
          <input
            className="pt-input"
            placeholder="Search things..."
            type="text"
          />
          <span className="pt-navbar-divider" />
          <button className="pt-button pt-minimal pt-icon-user" />
          <button className="pt-button pt-minimal pt-icon-notifications" />
          <button className="pt-button pt-minimal pt-icon-cog" />
        </div>
      </nav>
    )
  }

  private handleClick(routeName: Routes) {
    this.props.dispatch(changeRoute(routeName))
  }
}

export default connect()(Navbar)
