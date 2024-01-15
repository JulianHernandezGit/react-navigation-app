import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href="/(tabs)/news/news1" asChild>
        <Button title="Go to News 1" />
      </Link>

      <Link href="/(tabs)/news/news2" asChild>
        <Button title="Go to News 2" />
      </Link>
    </View>
  )
}

export default index