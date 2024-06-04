import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userMark } from "../../middleware/Api";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useEffect } from "react";

const Bookmark = () => {
  const { user, isLogged } = useGlobalContext();
  const [bookMarks, setBookMarks] = useState([]);
  const userId = user.id;
  useEffect(() => {
    const fetchMark = async () => {
      try {
        const res = await userMark(userId);
        if (res.ok) {
          setBookMarks(res);
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
        {bookMarks&& (
          bookMarks.map((item)=>(
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
  );
};

export default Bookmark;
