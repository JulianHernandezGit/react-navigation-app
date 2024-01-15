import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
    <Tabs>
        {/*<Tabs.Screen name="tab1"
            options={{
                tabBarLabel: 'News Feed',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="newspaper" size={size} color={color} />
                ),
            }}
        />*/}

        <Tabs.Screen name="news"
            options={{
                tabBarLabel: 'News Feed',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="newspaper" size={size} color={color} />
                ),
            }}
        />

        <Tabs.Screen name="tab2"
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}
        />
        <Tabs.Screen name="index" options={{ href: null }}></Tabs.Screen>
    </Tabs>
    );
}

export default TabsLayout;
