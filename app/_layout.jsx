import { Stack, SplashScreen } from "expo-router";
import GlobalProvier from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  return (
    <GlobalProvier>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvier>
  );
}
