import { Text, View, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {useGlobalContext}from '../context/GlobalProvider'
export default function Index() {
  const {user, isLoading} =useGlobalContext()
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
