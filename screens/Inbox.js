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
            <Image source={require('../images/santa-pic.png')} />
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
    flex: 0.25,
    flexDirection: "row",
    width: "100%",
    fontSize: 36,
    fontWeight: "bold",
    // marginBottom: 10,
    color: "#978DF3",
    fontFamily: "Times New Roman",
    borderWidth: 1,
    borderColor: "black"
  },

  messageContainer: {
    flex: 0.65,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: "black"
  },

  // messageContainerTwo: {
  //   flex: 0.65,
  //   flexDirection: "row",
  //   width: "80%",
  //   borderWidth: 1,
  //   borderColor: "red"
  // },

  // messageContainerThree: {
  //   flex: 0.65,
  //   flexDirection: "row",
  //   width: "80%",
  //   borderWidth: 1,
  //   borderColor: "blue"
  // },

  // messageContainerFour: {
  //   flex: 0.65,
  //   flexDirection: "row",
  //   width: "80%",
  //   borderWidth: 1,
  //   borderColor: "green"
  // },

  // messageContainerFive: {
  //   flex: 0.65,
  //   flexDirection: "row",
  //   width: "80%",
  //   borderWidth: 1,
  //   borderColor: "purple"
  // },

  footerNavContainer: {
    flex: 0.35,
    borderWidth: 1,
    borderColor: "black"
  },

  left: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column"
  },

  right: {
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  }
});

export default Login;
