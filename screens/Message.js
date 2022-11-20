import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

function Message({ navigation }) {
  const [message, setMessage] = useState("");

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch('https://ga-hackathon-backend.herokuapp.com/messages');
        const data = await response.json();
        setMessage(data)
      } catch(error) {
        console.log(error)
      }
    }

    getData();
  },[])

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
    <StatusBar style="auto" />

      <Navbar />

      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>Messages</Text>
      </View>

      <View style={styles.sender}>
        <Text>Sender Icon</Text>
        <Text>Sender Name</Text>
      </View>

      <View style={styles.recMessageContainer}>
        <Text style={styles.recipText}>Is the rabbit white or pink?</Text>
      </View>

      <View style={styles.senderMessageContainer}>
        <Text style={styles.senderText}>It's more like an off white.</Text>
      </View>
      

      <View style={styles.recMessageContainer}>
        <Text style={styles.recipText}>Do you still have the rabbit?</Text>
      </View>

      <View style={styles.senderMessageContainer}>
        <Text style={styles.senderText}>Will send in real time</Text>
      </View>
      

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
    marginTop: 100,
  },

  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "semi-bold",
  },

  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 100,
    color: "#978DF3",
    fontFamily: "Times New Roman",
  },
});

export default Message;
