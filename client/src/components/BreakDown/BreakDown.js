import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BreakDown.css'

export default function BreakDown() {
    const [breakdown, setBreakdown] = useState([])

    const _fetchBreakdown = async function(){
        let response = await axios.get('http://localhost:8000/transactions/summary')
        let newBreakdown = response['data']
        setBreakdown(newBreakdown)
    }
    
    useEffect(() => {
        _fetchBreakdown()
    }, [])

    return (
        <div className='breakdown-container'>
            <h2 className="title">Breakdown</h2>
            <ul>
            {breakdown.map((category, idx) => (
                    <li className='category-details' key={idx}>
                        <span>{category.category}: </span>
                        <span className={category.total > 0 ? 'pos-total' : 'neg-total'}>{category.total}$</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
