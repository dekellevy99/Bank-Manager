import React from 'react'
import './Balance.css'
export default function Balance(props) {
    return (
        <div className='balance'>{props.balance} $</div>
    )
}
