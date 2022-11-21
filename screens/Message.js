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
        const response = await fetch(
          "https://ga-hackathon-backend.herokuapp.com/messages"
        );
        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
      <StatusBar style="auto" />

      <View style={styles.messageContainer}>
        <View style={styles.messageTopContainer}>
          <Image
            style={styles.messageTopPic}
            source={require("../images/message-one.png")}
          />
        </View>

        <View style={styles.messageTopContainer}>
          <Image
            style={styles.messageBottomPic}
            source={require("../images/message-two.png")}
          />
        </View>
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

  // messageContainer: {
  //   flex: 3,
  //   flexDirection: "column",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   justifyItems: "center",
  //   width: "75%",
  //   borderWidth: 1,
  //   borderColor: "red"
  //   // width: "100%",
  // },

  messageTopContainer: {
    flex: 3,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: 1170,
  },

  messageBottomContainer: {
    flex: 3,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center"
    // width: "100%",
  },

  messageTopPic: {
    width: 400
  },
});

export default Message;
