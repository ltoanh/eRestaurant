import React from 'react'
import { NavLink } from 'react-router-dom'
import PATHS from 'routes/path'

function Header() {
  return (
    <div>
      header
      <NavLink to={PATHS.HOME_PAGE}>homepage</NavLink>
      <NavLink to={PATHS.ABOUT_US}>about us</NavLink>
    </div>
  )
}

export default Header
