import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, handleChangeText,  ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`h-full ${otherStyles}`}>
      <Text>{title}</Text>
      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary item-center flex-row'>
        <TextInput 
        className='flex-1 text-white '
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        placeholderTextColor='#7b7b8b'
        secureTextEntry={title === 'Password' && !showPassword}/>
        {title === 'Password' && (
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}></TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField