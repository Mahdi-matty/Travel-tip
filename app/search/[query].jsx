import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { query } = useLocalSearchParams();
  useEffect(() => {
    refetch();
  }, [query]);

  return <SafeAreaView className="bg-primary h-full">
    <View>
        <Text>Hello{query}</Text>
    </View>
  </SafeAreaView>;
};

export default Search;
