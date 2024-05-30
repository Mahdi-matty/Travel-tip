import {  Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Api from '../../middleware/Api'

const Flights = ({formData}) => {
  const [flightData, setFlightData] = useState([])
  useEffect(()=>{
    const { origin, destenation, departureDate, passengerNumber  } = formData
    const flightFunc = async()=>{
      try {
        const res = Api.flightApi({origin, destenation, departureDate, passengerNumber})
        if(res.ok){
          setFlightData(res)
        }
      } catch(error){
        console.log(error)
      }
    }
    flightFunc()
  }, [formData])
  return (
    <View>
      {flightData&& (
        flightData.map((plane)=>(
          <View key={plane.id}>
            <Text>{plane.price}</Text>
          </View>
        ))
      )}
    </View>
  )
}

export default Flights
