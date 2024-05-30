import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import FormField from "./FormField";
import DateTimePicker from "@react-native-community/datetimepicker";

const NewRide = () => {
  const [departureDate, setDate] = useState(new Date());
  const [origin, setOrigin] = useState("");
  const [destenation, setDestination] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || departureDate;
    setShowDatePicker(false);
    setDate(currentDate);
  };
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRide;

const styles = StyleSheet.create({});
