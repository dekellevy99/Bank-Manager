import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Transactions from './components/Transactions'
import { useState, useEffect } from 'react'

export default function App() {
  const [transactions, setTransactions] = useState([])
  
  useEffect(() => {
    async function fecthTransactions(){
      // todo - create http request to the server and fetch the 
      // transaction. for now using mock data
      const transactions = [
          {id: 0, vendor: "Cyber", amount: 2000, category: "salary"},
          {id: 1 , vendor: "Menora", amount: 3000, category: "salary"},
          {id: 2, vendor: "Kampai", amount: -1000, category: "food"},
      ]
      setTransactions(transactions)
    }

    fecthTransactions()
  }, [])

  return (
    <div>
      <Transactions transactions={transactions} />
    </div>
        
  )
}
