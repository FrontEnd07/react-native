import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage/LoginPage";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

const Stack = createStackNavigator();

export const Navigation = () => <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginPage} options={{ title: "Авторизация" }} />
        <Stack.Screen name="VideoList" component={VideoList} options={{ title: "Список видео" }} />
        <Stack.Screen name="VideoDetail" component={VideoDetail} options={{ title: "Детали видео" }} />
    </Stack.Navigator>
</NavigationContainer>