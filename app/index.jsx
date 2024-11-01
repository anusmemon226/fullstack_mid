import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <View className="flex h-full">
      <Image source={require("../assets/bgImage.jpeg")} style={{width:"100%",height:"80%"}}/>
      <View className="flex justify-center items-center h-[20%] p-3 bg-white rounded-tl-2xl rounded-tr-2xl">
        <Text className="text-2xl font-bold text-center">Welcome To AI Image Enhancer</Text>
        <Text className="text-md text-center">This Application allows you to enhance your image with many features, using Clerk Authentication</Text>
        <CustomButton title="Get Started" handlePress={()=>router.push("./(auth)/signup")}/>
      </View>
    </View>
  )
}

export default index