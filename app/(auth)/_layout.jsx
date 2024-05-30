import {   Text, View } from 'react-native'
import { Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
     <Stack >
      <Stack.Screen 
      name='sign-in'
      options={{
        headerShown:false
      }}/>
      <Stack.Screen 
      name='sign-up'
      options={{
        headerShown:false
      }}/>
      <StatusBar backgroundColor='#1616122'
      style='light'/>
    </Stack>
    </>
  )
   
}

export default AuthLayout
