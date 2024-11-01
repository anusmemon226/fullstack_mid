import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router'

const bookmark = () => {
  const { signOut } = useClerk()
  const { user } = useUser()
  return (
    <View className="flex justify-center items-center h-full">
      <SignedIn>
        <Text className="font-bold text-2xl uppercase">Bookmark Page</Text>
        <Text className="font-bold text-2xl">Hello {user?.emailAddresses[0].emailAddress}</Text>
        <CustomButton title="Sign out" handlePress={() => signOut({redirectUrl:"../(auth)/login"})} />
      </SignedIn>
      <SignedOut>
        <Redirect href={"../(auth)/login"}/>
      </SignedOut>
    </View>
  )
}

export default bookmark