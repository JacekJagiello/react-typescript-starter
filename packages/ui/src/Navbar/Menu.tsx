import * as React from 'react'
import { Button } from '@blueprintjs/core'
import { Routes } from '../Common/Routes'

interface MenuProps {
  onClick(routeName: Routes): void
}

class Menu extends React.PureComponent<MenuProps, {}> {
  public render() {
    const { onClick } = this.props
    return (
      <nav>
        <Button
          className="pt-minimal pt-icon-home"
          text="Home"
          onClick={() => onClick(Routes.Home)}
        />
        <Button
          className="pt-minimal pt-icon-dashboard"
          text="Dashboard"
          onClick={() => onClick(Routes.Dashboard)}
        />
      </nav>
    )
  }
}

export default Menu
