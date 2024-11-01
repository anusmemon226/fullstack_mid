import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
const TabsLayout = () => {
  const TabIcon = ({name}) => {
    return (
      <Ionicons name={name} size={24} color="black" />
    )
  }
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen name='home' options={{ tabBarIcon: ({focused}) => <TabIcon name={focused?"home":"home-outline"}/> }} />
      <Tabs.Screen name='bookmark' options={{ tabBarIcon: ({focused}) => <TabIcon name={focused?"bookmark":"bookmark-outline"}/> }} />
      <Tabs.Screen name='create' options={{ tabBarIcon: ({focused}) => <TabIcon name={focused?"add-circle":"add-circle-outline"}/> }} />
      <Tabs.Screen name='profile' options={{ tabBarIcon: ({focused}) => <TabIcon name={focused?"settings":"settings-outline"}/> }} />
    </Tabs>
  )
}

export default TabsLayout