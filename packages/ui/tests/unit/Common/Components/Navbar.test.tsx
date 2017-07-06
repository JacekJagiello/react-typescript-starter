import * as React from 'react'
import { shallow } from 'enzyme'
import { Classes } from '@blueprintjs/core'

import * as Navbar from 'src/Common/Components/Navbar'

describe("Navbar.Template", () => {
  
  test('Can be dark or white colored', () => {
    const navbarDark = shallow(<Navbar.Template dark={true} />)
    expect(navbarDark.hasClass(Classes.DARK)).toBeTruthy()

    const navbarWhite = shallow(<Navbar.Template />)
    expect(navbarWhite.hasClass(Classes.DARK)).toBeFalsy()
  })
})

