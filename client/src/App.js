import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Transactions from './components/Transactions'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [],
      balance: 0
    }
  }
  render() {
    return (
    )
  }
}