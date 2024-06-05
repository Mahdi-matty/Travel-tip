import {  Text, View } from 'react-native'
import { useAuthRequest } from 'expo-auth-session';
import { fireAuth } from '../middleware/FireBaseConfig'
import * as Google from 'expo-auth-session/providers/google';
import {signInWithCredential, GoogleAuthProvider } from 'firebase/auth'
import CustomButton from './CustomButton';
const OauthLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: 'YOUR_EXPO_CLIENT_ID',
    // iosClientId: 'YOUR_IOS_CLIENT_ID',
    // androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: process.env.CLIENT_ID,
  });
    const signIn = async()=>{
        try {
          const result = await promptAsync();
          if (result.type === 'success') {
            const { id_token } = result.params;
            const credential = GoogleAuthProvider.credential(id_token);
            const userCredential = await signInWithCredential(fireAuth, credential);
            console.log('User signed in:', userCredential.user);
            Alert.alert('Success', 'Logged in with Google!');
          }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <View>
      <CustomButton title='google' handlePress={signIn}/>
    </View>
  )
}

export default OauthLogin
