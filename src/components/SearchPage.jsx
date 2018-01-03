import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { geocode } from '../utils/index';
import { searchHotelByLocation } from '../utils/index'
import _ from 'lodash';
import queryString from 'query-string';

const sortedHotels = (hotels, sortKey) => {
  return _.sortBy(hotels, h => h[sortKey])
}

export default class SearchPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      address: '',
      location: {
        lat: 35.7100627,
        lng: 139.8107004
      },
      hotels: [],
      sortKey: 'price',
      place: this.getPlaceParam() || 'Tokyo Sky Tree'
    }
  }

  componentDidMount(){
    const place = this.getPlaceParam();
    if (place){
      this.startSearch(place);
    }
  }

  getPlaceParam(){
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0){
      return place;
    }
    return null;
  }

  setErrorMessage(message){
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    })
  }

  handlePlaceChange(place){
    this.setState({ place });
  }

  handlePlaceSubmit(e){
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch();
  }
  
  startSearch(){
    geocode(this.state.place)
      .then(({ status, address, location }) => {
        if (status === 'OK'){
          this.setState({ address, location });
          return searchHotelByLocation(location);
        } else if (status === 'ZERO_RESULTS'){
          this.setErrorMessage('No result.');
        } else {
          this.setErrorMessage('An error happens.');
        }
      })
      .then(hotels => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) });
      })
      .catch(err => {
        this.setErrorMessage('Communication error.');
      })
  }

  handleSortKeyChange(sortKey){
    this.setState({ 
      sortKey, 
      hotels: sortedHotels(this.state.hotels, sortKey) 
    });
  }

  render(){
    return (
      <div className='search-page' style={{width: 1000}}>
        <h1 style={{textAlign: 'center', color: '#444'}}>Hotel Search</h1>
        <SearchForm
          place={this.state.place} 
          onPlaceChange={place => this.handlePlaceChange(place)}
          onSubmit={e => this.handlePlaceSubmit(e)}
        />
        <div className='result-area' style={{display: 'flex'}}>
          <Map
            location={this.state.location} 
          />
          <div style={{marginLeft: 20}}>
            <GeocodeResult 
              address={this.state.address}
              location={this.state.location}
            />
            <h2>Result of Searching Hotels</h2>
            <HotelsTable 
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={sortKey => this.handleSortKeyChange(sortKey)}  
            />
          </div>
        </div>
      </div>
    )
  }
}