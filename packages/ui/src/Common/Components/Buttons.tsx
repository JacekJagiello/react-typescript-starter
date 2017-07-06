import * as React from 'react'
import { Button, IButtonProps, Classes } from '@blueprintjs/core'

export const MinimalButton = (props: IButtonProps) => (
  <Button {...props} className={Classes.MINIMAL} />
)