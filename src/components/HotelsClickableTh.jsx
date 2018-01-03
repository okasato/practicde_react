import React, { Component } from 'react';

export default class HotelsClickableTh extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <th 
        style={{color: 'blue', cursor: 'pointer', wifth: 80}}
        onClick={() => this.props.onSort(this.props.sortKey)}
      >{this.props.label}{this.props.isSelected ? '▲' : ''}</th>
    )
  }
}