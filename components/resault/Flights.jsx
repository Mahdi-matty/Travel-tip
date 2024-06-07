import { FlatList, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Api from "../../middleware/Api";
import CustomButton from "../CustomButton";
import { db } from "../../middleware/FireBaseConfig";
import {useGlobalContext} from '../../context/GlobalProvider'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const Flights = ({ formData }) => {
  const [flightData, setFlightData] = useState([]);
  const {user} = useGlobalContext()
  const userId = user.id
  useEffect(() => {
    const { origin, destenation, departureDate, passengerNumber } = formData;
    const flightFunc = async () => {
      try {
        const res = Api.flightApi({
          origin,
          destenation,
          departureDate,
          passengerNumber,
        });
        if (res.ok) {
          const data = await res.json();
          setFlightData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    flightFunc();
  }, [formData]);
  const handleSubmit = async (plane) => {
    try {
      if(!user){
        console.log('no user found')
        return 
      }
      const markOj = {
        origin: plane.origin,
        destenation: plane.destenation,
        departureDate: plane.departureDate,
        pirce: plane.price,
        userId: userId
      }
      await addDoc(collection(db, "flightBookMark"), { markOj });
      console.log("added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({ item }) => (
    <View key={item.id}>
      <Text>{item.price}</Text>
      <CustomButton title="Mark" handlePress={() => handleSubmit(item)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={flightData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Flights;
