import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const CustomField = ({ label, placeholder, value, handleChange }) => {
    const [status, setStatus] = useState(false)
    return (
        <View className="w-full px-4 my-3">
            <Text className="text-2xl font-bold">{label}</Text>
            <View className="flex flex-row bg-slate-100 border border-gray-400 rounded">
                <TextInput placeholder={placeholder} value={value} className="flex-1 text-base p-2" onChangeText={handleChange} secureTextEntry={label === "Password" && status === false} />
                {label === "Password" && (
                    <>
                        <View className="my-auto pr-2">
                            <TouchableOpacity onPress={() => setStatus(!status)}>
                                <Ionicons name={status ? "eye-off" : "eye"} size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    )
}

export default CustomField