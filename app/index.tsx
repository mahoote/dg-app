import React from 'react'
import { Button, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="gap-4 items-center">
                <Text className="text-2xl">This is my app</Text>
            </View>
        </View>
    )
}
