import React, { Component } from 'react';

export default class Greeting extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        Hi {this.props.name}
      </div>
    )
  }
}