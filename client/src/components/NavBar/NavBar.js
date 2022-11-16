import React  from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <ul>
          <li><Link to='/'>Transactions</Link></li>
          <li><Link to='/operations'>Operations</Link></li>
          <li><Link to='/breakdown'>Breakdown</Link></li>
        </ul>
    </div>
  )
}
