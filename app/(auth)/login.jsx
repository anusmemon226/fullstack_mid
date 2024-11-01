import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomField from '../../components/CustomField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const login = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password:form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('../(tabs)/home')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])
  return (
    <View className="flex items-center justify-center h-full bg-white">
      <Image source={require("../../assets/logo.png")} style={{width:200,height:200}}/>
      <CustomField label="Email" placeholder="Enter Your Email" value={form.email} handleChange={(val)=>setForm({...form,email:val})}/>
      <CustomField label="Password" placeholder="Enter Your Password" value={form.password} handleChange={(val)=>setForm({...form,password:val})}/>
      <CustomButton title="Login" handlePress={onSignInPress}/>
      <TouchableOpacity onPress={()=>router.push("./signup")}>
        <Text className="font-bold">Create Your Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default login