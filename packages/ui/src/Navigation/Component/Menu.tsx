import * as React from 'react'

import { MinimalButton } from '../../Common/Components'
import { Routes } from '../../Common/Routes'

interface MenuProps {
  onClick(routeName: string): void
}

class Menu extends React.PureComponent<MenuProps, {}> {
  public render() {
    const { onClick } = this.props
    return (
      <nav>
        <MinimalButton
          iconName="home"
          text="Home"
          onClick={() => onClick(Routes.home)}
        />
        <MinimalButton
          iconName="dashboard"
          text="Dashboard"
          onClick={() => onClick(Routes.dashboard)}
        />
      </nav>
    )
  }
}

export default Menu
