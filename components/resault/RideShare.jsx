import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton";
import NewRide from "../NewRide";
import { db } from "../../middleware/FireBaseConfig";
import { addDoc, collection } from "firebase/firestore";
import {useGlobalContext} from '../../context/GlobalProvider'
const RideShare = ({ formData }) => {
  const [showNewRide, setShowNewRide] = useState(false);
  const [rideData, setRideData] = useState([]);
  const { origin, destenation, departureDate, passengerNumber } = formData;
  const {user} = useGlobalContext()
  const userId = user.id
  useEffect(() => {
    const fetchRide = async () => {
      try {
        const res = await Api.rideShare({
          origin,
          destenation,
          departureDate,
          passengerNumber,
        });
        if (res.ok) {
          setRideData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRide();
  }, []);
  const handleNewRide = () => {
    setShowNewRide(!showNewRide);
  };
  const handleBook = async (ride) => {
    try {
      if(!user){
        console.log('no user found')
        return 
      }
      const markOj = {
        origin: ride.origin,
        destenation: ride.destenation,
        departureDate: ride.departureDate,
        price:ride.price,
        userId: userId
      }
      await addDoc(collection(db, "rideBookMark"), { markOj });
      console.log("added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({ item }) => (
    <View key={item.id}>
      <Text>{item.price}</Text>
      <CustomButton title="Mark" handlePress={() => handleBook(item)} />
    </View>
  );
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
        <FlatList
          data={busData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default RideShare;
