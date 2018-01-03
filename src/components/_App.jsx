import React, { Component } from 'react';
import Greeting from './Greeting';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'John'
    }
  }

  // handleMouseOver(){
  //   this.setState({ name: 'Bob' });
  // }
  
  // handleMouseOut(){
  //   this.setState({ name: 'Mike' });
  // }

  handleNameChange(name){
    this.setState({ name })
  }

  render(){
    return (
      <div className='app'>
        {/* <div
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
        > */}
        <input 
          type="text" 
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={() => this.handleNameChange('Bob')}>I am Bob</button>
        <Greeting name={this.state.name}/>
        {/* </div> */}
      </div>
    )
  }
}