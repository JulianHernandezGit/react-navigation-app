import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const feed = () => {
    const router = useRouter();

  return (
    <View>
      <Button title="Go Home" onPress={() => router.back()} />
    </View>
  )
}

export default feed