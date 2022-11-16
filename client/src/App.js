import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Transactions from './components/Transactions/Transactions'
import Header from './components/Header/Header'
import TransactionOperations from './components/TransactionOperations/TransactionOperations'
import BreakDown from './components/BreakDown/BreakDown'
import axios from 'axios'
import './App.css'


export default function App() {
  const [loggedUser, setLoggedUser] = useState({})

  const _fetchUser = async function(){
    let response = await axios.get("http://localhost:8000/users/1")
    let user = response['data']
    setLoggedUser(user)
  }

  useEffect(() => {_fetchUser()}, [])

  return (
    <Router>
      <div>
        <Header balance={loggedUser.balance}/>

        <Route exact path='/' render={() => <Transactions/>}></Route>
        <Route exact path='/operations' render={() => <TransactionOperations/>}></Route>
        <Route exact path='/breakdown' render={() => <BreakDown/>}></Route>
      </div>

    </Router>

  )
}
