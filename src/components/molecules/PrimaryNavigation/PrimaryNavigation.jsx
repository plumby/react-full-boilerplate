import React from 'react'
import { Link } from 'components/atoms'

const PrimaryNavigation = (props) => {
  return (
    <nav {...props}>
      <Link to="/">Root</Link>
      <Link to="/test">Test</Link>
    </nav>
  )
}

export default PrimaryNavigation


// <li><StyledLink to="/" activeOnlyWhenExact activeClassName="active">Home</StyledLink></li>
// <li><StyledLink to="/sample-page" activeClassName="active">Sample page</StyledLink></li>
