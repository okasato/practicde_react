import React, { Component } from 'react';
import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

export default class HotelsTable extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Hotel Name</th>
            <HotelsClickableTh
              label={'Price'}
              sortKey={'price'}
              isSelected={this.props.sortKey === 'price'}
              onSort={key => this.props.onSort(key)}
            />
            <HotelsClickableTh
              label={'Review'}
              sortKey={'reviewAverage'}
              isSelected={this.props.sortKey === 'reviewAverage'}
              onSort={key => this.props.onSort(key)}
            />
            {/* <th 
              style={{minWidth: 70}}
              onClick={() => this.props.onSort('price')}
            >Price{sortKey === 'price' ? '▲' : ''}</th>
            <th onClick={() => this.props.onSort('reviewAverage')}>
              Review{sortKey === 'reviewAverage' ? '▲' : ''}
            </th> */}
            <th>Review Counts</th>
            <th>Distance</th>
          </tr>
          {this.props.hotels.map(hotel => (
            <HotelRow key={hotel.id} hotel={hotel}/>
          ))}
        </tbody>
      </table>
    )
  }
}