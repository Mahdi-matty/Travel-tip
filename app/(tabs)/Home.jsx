import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Train from '../../components/resault/Train'
import Flights from "../../components/resault/Flights";
import RideShare from '../../components/resault/RideShare'
const Home = () => {
  const [showResult , setShowResult] = useState(false)
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); // Store form data in state
    setShowResult(true); // Show the result
  };
  return (
    <SafeAreaView>
      <View>
        <SearchBar onSubmit={handleFormSubmit}/>
      </View>
      {showResult && (
        <View>
          <Train formData={formData}/>
          <Flights formData={formData}/>
          <RideShare formData={formData}/>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
