import { Stack } from "expo-router";

const NewStack = () => {
    return (<Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Newsfeed" }} />
    </Stack>
    );
}

export default NewStack;