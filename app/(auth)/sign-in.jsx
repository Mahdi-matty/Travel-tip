import { Alert, ScrollView, Text, View } from 'react-native'
import  { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { fireAuth } from '../../middleware/FireBaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInWithEmailAndPassword} from 'firebase/auth'
import OauthLogin from '../../components/OauthLogin'
const SignIn = () => {
  const [showNormalLogin, setShowNormalLogin] = useState(true)
  const [showOauthLogin, setShowOauthLogin] = useState(false)
  const [Form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async(form)=>{
    if (form.username === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);
    try {
      const res = await signInWithEmailAndPassword(fireAuth, form.email, form.password)
      const token = await res.user.getIdToken();
      if(res.ok){
        await AsyncStorage.setItem('token', token);
        setIsLogged(true)
        setUser(res.user);
        router.push('Home');
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsSubmitting(false)
    }
  }
  const handleOAuth = ()=>{
    setShowNormalLogin(!showNormalLogin)
    setShowOauthLogin(!showOauthLogin)
  }
  return (
    <SafeAreaView className='bg-primary h-full' >
      <ScrollView >
        {showNormalLogin&& (
          <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <FormField 
          title='email'
          value={Form.email}
          handleChangeText={(e)=>setForm({...Form, email:e})}/>
          <FormField 
          title='Password'
          value={Form.password}
          handleChangeText={(e)=>setForm({...Form, password:e})}/>
          <CustomButton 
          title='sign in'
          onPress={handleSubmit}
          containerStyles='mt-7'
          isLoading={isSubmitting}/>
        </View>
        )}
        
        <View>
          <Text>Don't have an account? </Text>
          <Link href='/sign-up'>SignUp</Link>
        </View>
        <CustomButton 
        title='login with google'
        onPress={handleOAuth}/>
        {showOauthLogin&& (
          <View>
            <OauthLogin />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
