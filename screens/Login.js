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
  Pressable
} from "react-native";

function Login({navigation}) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
        {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
        

          <Text style={styles.header}>Welcome Back!</Text>

          

          <Text>Image here </Text>
     
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
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
     
          <Pressable style={styles.loginBtn}>
          <Text style={styles.loginText} title="Log In" onPress={() => navigation.navigate("home")}>Log In</Text>
          </Pressable>
        </View>
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
        backgroundColor: "#fff",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "gray",
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
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        color: "#fff",
        backgroundColor: "#978DF3",
        marginTop: 100
      },

      loginText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "semi-bold"
      },

      header: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 100,
        color: "#978DF3",
        fontFamily: "Times New Roman",
      }


    });

    export default Login;