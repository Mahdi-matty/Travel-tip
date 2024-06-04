import {  Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { userTrip } from "../../middleware/Api";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useEffect } from "react";

const Trips = () => {
  const { user, isLogged } = useGlobalContext();
  const [trips, setTrips] = useState([]);
  const userId = user.id;
  useEffect(() => {
    const fetchMark = async () => {
      try {
        const res = await userTrip(userId);
        if (res.ok) {
          setTrips(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (isLogged) {
      fetchMark();
    }
  }, [isLogged, user]);
  return (
    <SafeAreaView>
      <View>
        {trips&& (
          trips.map((item)=>(
            <View key={item.id}>
              <Text>{item.origin}</Text>
              <Text>{item.destination}</Text>
              <Text>{item.time}</Text>
              <Text>{item.price}</Text>
            </View>
          ))
        )}
      </View>
    </SafeAreaView>
  )
}

export default Trips
