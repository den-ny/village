import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import FooterNav from "../components/FooterNav";
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

function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image style={styles.image} source={require("../assets/.png")} /> */}

      <Text style={styles.header}>Inbox</Text>

      {/* List of messages */}

      {/* <Pressable
        style={styles.realMessage}
        onPress={() => navigation.navigate("Message")}
      > */}
      {/* WAS PREVIOUSLY WRAPPED AROUND MESSAGE TOP ONLY */}
      {/* </Pressable> */}
      <View style={styles.allMessagesContainer}>

        <View style={styles.messageContainer}>
          <View style={styles.left}>
            <Image style={styles.profPic} source={require('../images/santa-pic.png')} />
          </View>
          <View style={styles.right}>
            <Text style={styles.lineOne}>Santa</Text>
            <Text style={styles.lineTwo}>Do you still have the rabbit?</Text>
            <Text style={styles.lineThree}>On Nov. 13 4:35 PM</Text>
          </View>
        </View>
      

      <View style={styles.messageContainer}>
        <View style={styles.left}>
        <Image source={require('../images/nanna.png')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.lineOne}>Nanna</Text>
          <Text style={styles.lineTwo}>You: Is the winter coat in good condition?</Text>
          <Text style={styles.lineThree}>On Nov. 13 1:28 PM</Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.left}>
        <Image source={require('../images/supermom.png')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.lineOne}>SuperMom</Text>
          <Text style={styles.lineTwo}>I am interested in the rocking horse.</Text>
          <Text style={styles.lineThree}>On Nov. 07 11:03 AM</Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.left}>
        <Image source={require('../images/wanda.png')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.lineOne}>Wanda434</Text>
          <Text style={styles.lineTwo}>Is the Peppa Pig book still available?</Text>
          <Text style={styles.lineThree}>On Nov. 04 10:09 PM</Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.left}>
        <Image source={require('../images/kevin.png')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.lineOne}>KevinJ</Text>
          <Text style={styles.lineTwo}>You: I am sorry that is gone.</Text>
          <Text style={styles.lineThree}>On Nov. 01 8:16 AM</Text>
        </View>
      </View>
        </View>

      {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}
      <View style={styles.footerNavContainer}>
        <FooterNav />
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
    width: "100%"
  },

  allMessagesContainer: {
    flex: 2,
    alignItems: "stretch",
  },

  header: {
    flex: 0.2,
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    fontSize: 36,
    fontWeight: "#500",
    color: "#000",
    fontFamily: "Times New Roman",
    marginLeft: 20,
  },

  messageContainer: {
    flex: 0.19,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#978DF3"
  },

  footerNavContainer: {
    flex: 0.25,

  },

  left: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column"
  },

  right: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    flexDirection: "column",
    width: "75%",
  },

  lineOne: {
    color: "black",
    fontWeight: "500",
    marginBottom: 10,
    // marginLeft: 5,
    marginRight: 20,
  },

  lineTwo: {
    color: "#FFF",
    marginBottom: 10,
    // marginLeft: 5,
    marginRight: 10,
  },

  lineThree: {
    color: "#FFF",
    marginBottom: 10,
    // marginLeft: 15,
    marginRight: 20,
    fontSize: 12,
  },

  profPic: {
  }
});

export default Login;
