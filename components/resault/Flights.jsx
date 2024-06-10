import { FlatList, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Api from "../../middleware/Api";
import CustomButton from "../CustomButton";
import { db } from "../../middleware/FireBaseConfig";
import { useGlobalContext } from "../../context/GlobalProvider";
import { collection, addDoc } from "firebase/firestore";
import AwsGateway from "../../middleware/AwsGateway";
const Flights = ({ formData }) => {
  const [flightData, setFlightData] = useState([]);
  const { user } = useGlobalContext();
  const [originIndex, setOriginIndex] = useState('')
  const [desteinationIndex, setDestenationIndex] = useState('')
  const userId = user.id;
  useEffect(() => {
    const { origin, destenation } = formData;
    const findAirports = async (location, setter) => {
      try {
        const res = await AwsGateway(location);
        if (res.ok) {
          setter(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (formData) {
      findAirports(origin, setOriginIndex)
      findAirports(destenation, setDestenationIndex);
    }
  }, [formData]);
  useEffect(() => {
    const { departureDate, passengerNumber } = formData;
    const flightFunc = async () => {
      try {
        const res = Api.flightApi({
          origin: originIndex,
          destenation: desteinationIndex,
          departureDate: departureDate,
          passengerNumber: passengerNumber
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
  }, [formData, originIndex, desteinationIndex]);
  const handleSubmit = async (plane) => {
    try {
      if (!user) {
        console.log("no user found");
        return;
      }
      const markOj = {
        origin: plane.origin,
        destenation: plane.destenation,
        departureDate: plane.departureDate,
        pirce: plane.price,
        userId: userId,
      };
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
