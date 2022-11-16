import React from 'react'
import NavBar from '../NavBar/NavBar'
import Balance from '../Balance/Balance'
import './Header.css'


export default function Header(props) {
  return (
    <div className='header'>
        <NavBar/>
        <Balance balance={props.balance}/>
    </div>
  )
}
