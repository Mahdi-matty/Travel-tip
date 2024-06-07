import {  Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import FormField from "./FormField";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addDoc, collection } from "firebase/firestore";
import {useGlobalContext} from '../../context/GlobalProvider'
import CustomButton from "./CustomButton";
const NewRide = () => {
  const [departureDate, setDate] = useState(new Date());
  const [origin, setOrigin] = useState("");
  const [destenation, setDestination] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [price, setPrice] = useState(0)
  const {user} = useGlobalContext()
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || departureDate;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const handleSubmitNewRide =async()=>{
    try {
      if(!user){
        console.log('no user found')
        return 
      }
      const markOj ={
        origin: origin,
        destenation: destenation,
        departureDate: departureDate,
        price: price,
        userId: user.id
      }
      await addDoc(collection(db, "newRideShare"), { markOj });
      console.log("added successfully");
    }catch(error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <FormField
          title="origin"
          value={origin}
          handleChangeText={(text) => setOrigin({ text })}
          placeholder={"origin"}
        />
        <FormField
          title="destination"
          value={destenation}
          handleChangeText={(text) => setDestination({ text })}
          placeholder={"destination"}
        />
        <FormField
          title="price"
          value={price}
          handleChangeText={(text) => setPrice({ text })}
          placeholder={"price"}
        />
        <View>
          <Text>Date</Text>
          <Button
            title="Select a Date"
            onPress={() => setShowDatePicker(true)}
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={departureDate}
            mode="departureDate"
            display="default"
            onChange={onChange}
          />
        )}
        <CustomButton title='submit'  handlePress={handleSubmitNewRide}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRide;

