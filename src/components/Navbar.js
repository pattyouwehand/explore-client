import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar(){
  return(
        <nav className='nav'>
          <ul role='navigation'>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
            {/* <li><Link style={{ textDecoration: 'none', color: 'white' }}to="/login">Search</Link></li> */}
          </ul>
        </nav>
  )
}