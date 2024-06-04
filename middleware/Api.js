const URL_PREFIX = "http://localhost:3001"
const Api = {
 megaBus: (origin, destination, departureDate, passengerNumber)=>{
    return fetch(`https://us.megabus.com/journey-planner/api/journeys/travel-dates?originCityId=${origin}&destinationCityId=${destination}$departureDate=${departureDate}$totalPassengers=${passengerNumber}&concessionCount=0&nusCount=0&days=1`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            throw new Error('not able to get data')
        }
        return res.json()
    })
 },
 flightApi:(origin, destination, departureDate, passengerNumber)=>{
    return fetch(`https://api.flightapi.io/onewaytrip/5f8b1ec2a9d31578961b4109f4dfd8/${origin}/${destination}/${departureDate}/${passengerNumber}/0/0/Economy/USD`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            throw new Error('not able to get data')
        }
        return res.json()
    })
 },
 rideShare:(origin, destination, departureDate, passengerNumber)=>{
    return fetch(`https://api.flightapi.io/onewaytrip/5f8b1ec2a9d31578961b4109f4dfd8/${origin}/${destination}/${departureDate}/${passengerNumber}/0/0/Economy/USD`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            throw new Error('not able to get data')
        }
        return res.json()
    })
 },
 markTrip:(tripObj)=>{
    return fetch(`https://api.flightapi.io/onewaytrip/5f8b1ec2a9d31578961b4109f4dfd8/`, {
        method: 'POST',
        body: JSON.stringify(tripObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            throw new Error('not able to post data')
        }
        return res.json()
    })
 },
 userMark:(userId)=>{
    return fetch(`${URL_PREFIX}/api/mark/${userId}`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        if(!res.ok){
            throw new Error('not able to fetch data')
        }
        return res.json()
    })
 },
 userTrip:(userId)=>{
    return fetch(`${URL_PREFIX}/api/trip/${userId}`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        if(!res.ok){
            throw new Error('not able to fetch data')
        }
        return res.json()
    })
 },
}

export default Api