import React, { Component } from 'react';

export default class SearchForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form style={{textAlign: 'center', marginBottom: 40}} onSubmit={e => this.props.onSubmit(e)}>
        <input 
          type="text"
          value={this.props.place}
          style={{fontSize: 24, padding: 3}}
          onChange={e => this.props.onPlaceChange(e.target.value)}
        />
        <input type="submit" value='Search' style={{WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}/>
      </form>
    )
  }
}