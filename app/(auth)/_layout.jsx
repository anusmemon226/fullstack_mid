import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import React from 'react'

const AuthLayout = () => {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'../(tabs)/home'} />
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' />
      <Stack.Screen name='signup' />
    </Stack>
  )
}

export default AuthLayout