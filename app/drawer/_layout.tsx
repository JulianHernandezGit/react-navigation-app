import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

function CustomDrawerContent(props: any) {
    const router = useRouter();
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Reset Navigation" onPress={() => router.replace('/')} />
        </DrawerContentScrollView>
    );
    
}
const DrawerLayout = () => {
    return (
    <Drawer drawerContent={CustomDrawerContent}>
    <Drawer.Screen name='news' options={{ headerTitle: "My News" }} />
    </Drawer>
    );
}

export default DrawerLayout;
