import * as React from 'react'
import * as classnames from 'classnames'
import { Classes } from '@blueprintjs/core'

interface NavbarProps {
  children?: any
  dark?: boolean
}

export const Template = (props: NavbarProps) => {
  const navbarClasses = classnames(Classes.NAVBAR, {
    [Classes.DARK]: props.dark
  })
  return (
    <nav className={navbarClasses}>
      {props.children}
    </nav>
  )
}

export const GroupLeft = (props) => (
  <div className={classnames(Classes.NAVBAR_GROUP, Classes.ALIGN_LEFT)}>
    {props.children}
  </div>
)

export const GroupRight = (props) => (
  <div className={classnames(Classes.NAVBAR_GROUP, Classes.ALIGN_RIGHT)}>
    {props.children}
  </div>
)

export const Divider = () => <span className={Classes.NAVBAR_DIVIDER} />