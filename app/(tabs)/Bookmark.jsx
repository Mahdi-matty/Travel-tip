import {  View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Flight from "../../components/BookMark/Flight"; 
import Ride from '../../components/BookMark/Ride'
import Train from '../../components/BookMark/Train'
const Bookmark = () => {
  const [activeTab, setActiveTab] = useState("flight")

  const renderContent = () => {
    switch (activeTab) {
      case "flight":
        return <Flight />;
      case "ride":
        return <Ride />;
      case "train":
        return <Train />;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Tab buttons */}
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
          <TouchableOpacity onPress={() => setActiveTab("flight")} style={{ padding: 10 }}>
            <Text style={{ color: activeTab === "flight" ? "blue" : "black" }}>Flight</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("ride")} style={{ padding: 10 }}>
            <Text style={{ color: activeTab === "ride" ? "blue" : "black" }}>Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("train")} style={{ padding: 10 }}>
            <Text style={{ color: activeTab === "train" ? "blue" : "black" }}>Train</Text>
          </TouchableOpacity>
        </View>
        
        {/* Render content based on active tab */}
        <View style={{ flex: 1, marginTop: 20 }}>
          {renderContent()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
