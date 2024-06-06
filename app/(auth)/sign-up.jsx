import { ScrollView, Text, View } from 'react-native'
import  { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import {fireAuth} from '../../middleware/FireBaseConfig'
const SignUp = () => {

  const [Form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async(form)=>{
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true)
    try {
      const res = await createUserWithEmailAndPassword(fireAuth, form.email, form.password)
      if(res.ok){
        router.push('/login')
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full' >
      <ScrollView >
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <FormField 
          title='Email'
          value={Form.email}
          handleChangeText={(e)=>setForm({...Form, email:e})}
          keyboardType='email-address'/>
          <FormField 
          title='Password'
          value={Form.password}
          handleChangeText={(e)=>setForm({...Form, password:e})}/>
          <CustomButton 
          title='sign up'
          onPress={handleSubmit}
          containerStyles='mt-7'
          isLoading={isSubmitting}/>
        </View>
        <View>
          <Text>Already have an account? </Text>
          <Link href='/sign-in'>SignIn</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp