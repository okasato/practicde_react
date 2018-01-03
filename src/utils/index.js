import geolib from 'geolib';
import Rakuten from '../lib/Rakuten';


export const geocode = place => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const result = data.results[0];
      const status = data.status;

      if (typeof result === 'undefined'){
        return { status }
      }
      const address = result.formatted_address;
      const location = result.geometry.location;
      return {
        status,
        address,
        location
      }
    })
}

export const reverseGeocode = () => null;

const RAKUTEN_APP_ID = '1071539059844234371';

export const searchHotelByLocation = location => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  }
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(res => {
      return res.json();
    })
    .then(result => {
      return result.hotels.map(hotel => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        // const price = basicInfo.hotelMinCharge;
        const distance = geolib.getDistance(
          { latitude: location.lat, longitude: location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: basicInfo.hotelThumbnailUrl,
          // price: price ? `${price}yen` : 'No rooms',
          price: basicInfo.hotelMinCharge,
          reviewAverage: basicInfo.reviewAverage,
          reviewCount: basicInfo.reviewCount,
          distance
        };
      });
    })
};