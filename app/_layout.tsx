import { Stack } from "expo-router";

const StackLayout = () => {
    return (
    <Stack screenOptions={{ 
        headerStyle: { 
            backgroundColor: "#1C357F",
        },
        headerTintColor: "#fff", 
        }}>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="profile" />
        <Stack.Screen name="drawer" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="modal" options={{ presentation: 'modal', headerTitle: "Modal" }}/>
    </Stack>
    );
};

export default StackLayout