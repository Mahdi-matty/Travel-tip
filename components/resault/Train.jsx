import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Api from '../../middleware/Api'
const Train = ({formData}) => {
  const [busData, setBusData] = useState([])
  useEffect(()=>{
    const { origin, destenation, departureDate, passengerNumber  } = formData
    const busData = async()=>{
      try {
        const res = Api.megaBus({origin, destenation, departureDate, passengerNumber})
        if(res.ok){
          setBusData(res)
        }
      } catch(error){
        console.log(error)
      }
    }
    busData()
  }, [formData])
  return (
    <View>
      {busData && (
        busData.map((bus)=>(
          <View key={bus.id}>
            <Text>{bus.price}</Text>
          </View>
        ))
      )}
    </View>
  )
}

export default Train

const styles = StyleSheet.create({})