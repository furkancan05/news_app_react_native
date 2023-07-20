import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homepage from "./src/pages/HomePage"
import NewsDetailPage from './src/pages/NewsDetailPage';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='homepage'>
        <Stack.Screen name="homepage" component={Homepage} options={{ title: "News", headerTitleAlign: "center" }} />
        <Stack.Screen name="newsDetailPage" component={NewsDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
