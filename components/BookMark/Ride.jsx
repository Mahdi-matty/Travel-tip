import { Text, FlatList, View } from "react-native";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useState } from "react";
const Ride = () => {
  const [rideBookMarks, setRideBookMarks] = useState([]);
  const { user, isLogged } = useGlobalContext();
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        if (!user) {
          console.log("No user found");
          return;
        }

        const q = query(
          collection(db, "rideBookMark"),
          where("markOj.userId", "==", user.id)
        );
        const querySnapshot = await getDocs(q);
        const bookmarks = querySnapshot.docs.map((doc) => doc.data());

        setRideBookMarks(bookmarks);
      } catch (error) {
        console.log(error);
      }
    };

    if (isLogged) {
      fetchMarks();
    }
  }, [user, isLogged]);
  const renderItem = ({ item }) => (
    <View key={item.id}>
      <Text>{item.price}</Text>
      <Text>{item.origin}</Text>
      <Text>{item.destination}</Text>
      <Text>{item.departureDate}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={rideBookMarks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Ride;
