import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress }) => {
    return (
        <TouchableOpacity className="bg-gray-950 p-3 rounded-xl w-[75%] my-3" onPress={handlePress}>
            <Text className="text-white text-xl text-center">{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton