import { ScrollView, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./FormField";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "./CustomButton";

const SearchBar = ({onSubmit}) => {

  const [departureDate, setDate] = useState(new Date());
  const [origin, setOrigin] = useState('')
  const [destenation, setDestination] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [passengerNumber, setPassnum] = useState(1)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || departureDate;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const handleSubmit = () => {
    onSubmit({ origin, destenation, departureDate, passengerNumber  });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <FormField 
        title="origin"
        value={origin}
        handleChangeText={(text) => setOrigin({ text })}
        placeholder={"origin"}/>
        <FormField 
         title="destination"
         value={destenation}
         handleChangeText={(text) => setDestination({ text })}
         placeholder={"destination"}/>
         <FormField 
        title="passenger number"
        value={passengerNumber}
        handleChangeText={(text) => setPassnum({ text })}
        placeholder={"passengernumber"}/>
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
        <CustomButton title="Submit" handlePress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchBar;
