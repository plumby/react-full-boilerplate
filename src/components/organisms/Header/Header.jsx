import React from 'react'
import { PrimaryNavigation } from 'components/molecules'

import style from './style.css'

const Header = (props) => (
  <PrimaryNavigation {...props} className={style.navStyle} />
)

export default Header
