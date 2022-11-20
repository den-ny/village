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
import Navbar from "../components/Navbar";
function ProductInfo({navigation}) {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
     
          

        <View>
            <Text style={styles.image}> Profile Picture </Text>
            <Text>Name</Text>
            <Text>Karma Points | Hand Icon</Text>  
            <Text>+ Points</Text>
        </View>
           <View>
        <Text> My Items     </Text>
        </View>
        <View>
            <Text> Winter Coat</Text>
            <Text>Electric Bugaloo</Text>
        </View>

          {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}
        
          <Pressable style={styles.loginBtn} >
            {/* <Text style={styles.loginText} onPress = {() => navigation.navigate("home")} title="LOGIN" >Home</Text> */}
            <Text>HomeBtn | Bell | + | SEARCH | ...</Text>
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
        borderRadius: 5,
        backgroundColor: "red",
        width: "20%",
        padding: 50,
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
    });

    export default ProductInfo;