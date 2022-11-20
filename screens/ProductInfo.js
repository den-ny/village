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
          <View style={styles.imgContainer}>

          <Image source={require('../images/temporary-coat.jpg')} style={styles.image}/>
          </View>
            <Text style={styles.productName}>Winter Coat</Text>
            <Text style={styles.location}>Columbus, OH</Text>  
            <Text style={styles.productDescription}>Like-new, gently used winter coat for ages 1-2 years. Bought for my nephew recently and it did not fit him. Hoping it finds someone in need!</Text>
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

      imgContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        height: "50%"
      },
     
      image: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginBottom: 40,
        borderRadius: 5,
        // backgroundColor: "red",
        width: "100%",
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