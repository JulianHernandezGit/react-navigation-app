import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, router, useSearchParams } from 'expo-router'

const details = () => {
    const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
      <Text>My news: {id}</Text>
      <Button title="Update params" onPress={() => router.setParams({ id: '123' })} />
    </View>
  )
}

export default details