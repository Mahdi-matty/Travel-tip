import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton";
import NewRide from "../NewRide";
import Api from '../../middleware/Api'

const RideShare = ({formData}) => {
  const [showNewRide, setShowNewRide] = useState(false);
  const [rideData, setRideData] = useState([])
  const { origin, destenation, departureDate, passengerNumber  } = formData
  useEffect(()=>{
    const fetchRide = async ()=>{
      try {
        const res = await Api.rideShare({ origin, destenation, departureDate, passengerNumber  })
        if(res.ok){
          setRideData(res)
        }
      }catch(error){
        console.log(error)
      }
    }
    fetchRide()
  }, [])
  const handleNewRide = ()=>{
    setShowNewRide(!showNewRide)
  }
  return (
    <View>
      <View>
        <CustomButton title="post something" handlePress={handleNewRide} />
        {showNewRide && (
          <View>
            <NewRide />
          </View>
        )}
      </View>
      <View>
        {rideData && (
          rideData.map((ride)=>(
            <View key={ride.id}>
              <Text>{ride.price}</Text>
            </View>
          ))
        )}

      </View>
    </View>
  );
};

export default RideShare;
