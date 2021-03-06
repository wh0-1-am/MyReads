import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from './comps/ProjectMain'
import Search from './comps/SearchEngine'
import ErrorPage404 from './comps/Error404'

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Switch>
      	  <Route exact path="/" component={Main} />
      	  <Route path="/search" component={Search} />
      	  <Route component={ErrorPage404} />
      	</Switch>
      </div>
    )
  }
}

export default App
