import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
        <div className='app' style={{display: 'flex', width: 2000}}>
          <ul className='left-navi' style={{listStyleType: 'none', paddingTop:20, paddingRight: 40, backgroundColor: '#CCC'}}>
            <li><Link to="/">Hotel Search</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={SearchPage}></Route>
            <Route path='/about' component={AboutPage}></Route>
          </Switch>
          {/* <SearchPage /> */}
        </div>
      </Router>
    )
  }
}