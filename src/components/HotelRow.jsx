import React, {Component} from 'react';

export default class HotelRow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <tr>
        <td style={{padding: 4}}><img src={this.props.hotel.thumbUrl} alt={this.props.hotel.name} /></td>
        <td style={{padding: 4}}><a href={this.props.hotel.url} target='_blank'>{this.props.hotel.name}</a></td>
        <td style={{padding: 4}}>{this.props.hotel.price ? `${this.props.hotel.price}yen` : 'No rooms'}</td>
        <td style={{padding: 4}}>{this.props.hotel.reviewAverage}</td>
        <td style={{padding: 4}}>{this.props.hotel.reviewCount}</td>
        <td style={{padding: 4}}>{this.props.hotel.distance}</td>
      </tr>
    )
  }
}