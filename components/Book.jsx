import { Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import addData from '../middleware/firebase'
const Book = () => {
  const handleSubmit = async () => {
    try {
        const res = await addData(data)
    }catch(error){
        console.log(error)
    }
  };
  return (
    <View>
      <CustomButton title="Submit" handlePress={handleSubmit} />
    </View>
  );
};

export default Book;
