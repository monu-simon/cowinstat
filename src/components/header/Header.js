import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <h2>Cowinstat</h2>
        <nav>
          <ul>
            <li><NavLink to=''>Home</NavLink></li>
            <li><NavLink to='book'>Book</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
