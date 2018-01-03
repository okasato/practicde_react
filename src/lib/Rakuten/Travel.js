export default {
  simpleHotelSearch: params => {
    return fetch(`https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?applicationId=${params.applicationId}&datumType=${params.datumType}&latitude=${params.latitude}&longitude=${params.longitude}`)
  } 

}