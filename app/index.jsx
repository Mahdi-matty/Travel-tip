import { Text, View, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          Welcome.
        </Text>
        <CustomButton
          title="continue with email"
          handlePress={() => router.push("/sign-in")}
          isLoading={isLoading}
        />
      </ScrollView>

      <StatusBar />
    </SafeAreaView>
  );
}
