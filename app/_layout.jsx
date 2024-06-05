import { Stack, SplashScreen } from "expo-router";
import GlobalProvier from "../context/GlobalProvider";
import {User, onAuthStateChanged} from 'firebase/auth'
import { useState, useEffect } from "react";
import { fireAuth } from "../middleware/FireBaseConfig";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [user, setUser] = useState<User || null>(null)

  useEffect(()=>{
    onAuthStateChanged(fireAuth, (user)=>{
      
    })
  })
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
