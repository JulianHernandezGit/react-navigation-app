import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href="/profile" asChild>
        <Button title="Go to profile" />
      </Link>

      <Link href="/feed" asChild>
        <Button title="Go to feed" />
      </Link>

      <Link href="/details/42" asChild>
        <Button title="Go to details 42" />
      </Link>
      <Link href="/details/43" asChild>
        <Button title="Go to details 43" />
      </Link>

      <Link href="/drawer" asChild replace>
        <Button title="Open Drawer" />
      </Link>

      <Link href="/(tabs)" asChild replace>
        <Button title="Open Tabs" />
      </Link>

      <Link href="/modal" asChild>
        <Button title="Open Modal" />
      </Link>
    </View>
  )
}

export default index
