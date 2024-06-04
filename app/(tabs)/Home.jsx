import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import Train from '../../components/resault/Train'
import Flights from "../../components/resault/Flights";
import RideShare from '../../components/resault/RideShare'
import { useGlobalContext } from '../../context/GlobalProvider'
const Home = () => {
  const { user, isLogged } = useGlobalContext();

  useEffect(()=>{
    if(!isLogged){
      router.push('/sign-in')
    }
  }, [isLogged])
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
