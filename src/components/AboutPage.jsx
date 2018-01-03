import React, { Component } from 'react';

import SearchPage from './SearchPage';

export default class AboutPage extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='about'>
        <h1 style={{textAlign: 'center', color: '#444'}}>About this web site</h1>
      </div>
    )
  }
}