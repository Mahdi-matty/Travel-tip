import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../middleware/FireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import CustomButton from "../CustomButton";
import {useGlobalContext} from '../../context/GlobalProvider'
const Train = ({ formData }) => {
  const [busData, setBusData] = useState([]);
  const {user} = useGlobalContext()
  const userId = user.id
  useEffect(() => {
    const { origin, destenation, departureDate, passengerNumber } = formData;
    const busData = async () => {
      try {
        const res = Api.megaBus({
          origin,
          destenation,
          departureDate,
          passengerNumber,
        });
        if (res.ok) {
          setBusData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    busData();
  }, [formData]);

  const handleSubmit = async (bus) => {
    try {
      if(!user){
        console.log('no user found')
        return 
      }
      const markOj = {
        origin: bus.origin,
        destenation: bus.destenation,
        departureDate: bus.departureDate,
        price:bus.price,
        userId: userId
      }
      await addDoc(collection(db, "busBookMark"), { markOj });
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
        data={busData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Train;

const styles = StyleSheet.create({});
