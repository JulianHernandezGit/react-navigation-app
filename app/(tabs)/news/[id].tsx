import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, router, useSearchParams } from 'expo-router'

const newsDetails = () => {
    const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />
      <Text>My news: {id}</Text>
    </View>
  )
}

export default newsDetails