import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Home,
    Upload,
    Capture,
    Register,
    Login
  } from "./screens";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/* <Stack.Screen name="capture" component={Capture} /> */}
        {/* <Stack.Screen name="photos" component={Upload} /> */}
        <Stack.Screen name="SignUp" component={Register} />
        
        {/* signin */}
        {/* <Stack.Screen name="Login" component={Login}/>  */}
        
        {/* <Stack.Screen name="home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
