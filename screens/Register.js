import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

function Login({navigation}) {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
          {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
          <View>
              <Button title="MENU BUtton"></Button>
              <Text>The Village</Text>
              <Button title="Pic"></Button>
          </View>
          <Text>What are you looking for? </Text>
           
           <Button title="Clothing"></Button>
           <Button title="Toys"></Button>
           <Button title="Books"></Button>
{/* 
           <Button title="Coat"></Button>
           <Button title="Shoes"></Button>

           <Button title="Education"></Button>
           <Button title="Infant"></Button>
           <Button title="Stuffed"></Button>

           <Button title="Games"></Button>
           <Button title="Toddler"></Button> */}
           
            <Text>Tell us about yourself</Text>
          <StatusBar style="auto" />
          
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setName(name)}
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
            //   secureTextEntry={true}
              onChangeText={(user) => setUser(user)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
     
          {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}
     
          <TouchableOpacity style={styles.loginBtn}>
            <Button style={styles.loginText} title="Lets GO!" onPress = {() => navigation.navigate("home")}></Button>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        marginBottom: 40,
      },
     
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
      top:{
        backgroundColor: "red",
        // flexDirection: "column",
        flex: 1
      }
    });

    export default Login;