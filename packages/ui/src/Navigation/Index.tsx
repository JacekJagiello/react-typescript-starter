import * as React from 'react'
import { push as changeRoute } from 'react-router-redux'
import { connect, DispatchProp } from 'react-redux'
import { IconClasses as Icon } from '@blueprintjs/core'

import { Navbar, MinimalButton } from 'src/Common/Components'
import Menu from './Menu'

interface INavbarProps {
  title?: string
}

type NavbarProps = INavbarProps & DispatchProp<any>

export class Navigation extends React.PureComponent<NavbarProps, any> {
  public static defaultProps: Partial<NavbarProps> = {
    title: '',
    dispatch: null,
  }

  public render() {
    return (
      <Navbar.Template dark={true}>
        <Navbar.GroupLeft>
          {this.props.title}
          <Navbar.Divider />
          <Menu onClick={this.handleClick.bind(this)} />
        </Navbar.GroupLeft>

        <Navbar.GroupRight>
          <Navbar.Divider />
          <MinimalButton iconName={Icon.USER} />
          <MinimalButton iconName={Icon.NOTIFICATIONS} />
          <MinimalButton iconName={Icon.COG} />
        </Navbar.GroupRight>
      </Navbar.Template>
    )
  }

  private handleClick(routeName: string) {
    this.props.dispatch(changeRoute(routeName))
  }
}

export default connect()(Navigation)
