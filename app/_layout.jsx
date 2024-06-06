import { View, ActivityIndicator } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import {useGlobalContext}from '../context/GlobalProvider'
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const {user, isLoading} =useGlobalContext()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
      {user ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );

}
