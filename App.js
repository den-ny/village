import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    Landing,
    Home,
    Upload,
    Capture,
    Register,
    Login,
    Inbox,
    Message,
    AccountInfo,
    ProductInfo,
    Posting
  } from "./screens";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Message" component={Message} />
        
        <Stack.Screen name="Account Info" component={AccountInfo} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        
        <Stack.Screen name="Posting" component={Posting} />
        <Stack.Screen name="Upload" component={Upload} />
        {/* signin */}
        <Stack.Screen name="Login" component={Login}/> 
        
        <Stack.Screen name="home" component={Home} />
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
