import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import CaseOne from './pages/CaseOne'

import Nav from './components/Nav'
export default class Main extends React.Component {
  render () {
    return (
      <div className="wrapper">
    <Nav />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/CaseOne" component={CaseOne}/>
        <Route path="/contact" component={Contact}/>
      </div>
    )
  }
}