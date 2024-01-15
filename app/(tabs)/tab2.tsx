import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const tab2 = () => {
  return (
    <View>
      <Link href="/" asChild replace>
        <Button title="Reset navigation" />
      </Link>
    </View>
  )
}

export default tab2