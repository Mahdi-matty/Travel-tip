import { Text,FlatList, View } from "react-native";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import {useGlobalContext} from '../../context/GlobalProvider'
const Flight = () => {
  const [flightBookMarks, setFlightBookMarks] = useState([]);
  const {user, isLogged} = useGlobalContext()
  const userId = user.id;
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        if (!user) {
          console.log('No user found');
          return;
        }

        const q = query(
          collection(db, "flightBookMark"),
          where("markOj.userId", "==", user.id)
        );
        const querySnapshot = await getDocs(q);
        const bookmarks = querySnapshot.docs.map(doc => doc.data());
        
        setFlightBookMarks(bookmarks);
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
    </View>
  );

  return (
    <View>
      <FlatList
        data={flightBookMarks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Flight;
