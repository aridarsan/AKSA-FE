import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Board from '../components/TrelloBoard'
import Home from '../components/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/:idPapan' component={Board} />
      </div>
    </Router>
  )
}

export default App
