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
  Pressable,
} from "react-native";

function AccountInfo({ navigation }) {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image style={styles.image} source={require("../assets/.png")} /> */}

      {/* NavBar */}
        {/* <View style={styles.navBar}>
            <Button title="="></Button>
            <Text>Karen T </Text>
            <Button title="Setting"></Button>
        </View> */}
      {/* List of messages */}

      {/* Profile Info Section */}
      <View style={styles.profile}>
        <View style={styles.profile_left}>
          <Text style={styles.profile_image}>Profile Pic</Text>
        </View>
        <View style={styles.profile_right}>
          <Text style={styles.profile_lineOne}>Karma Points</Text>
          <Text style={styles.profile_lineTwo}>320 KP</Text>
          <Text style={styles.profile_lineThree}>Columbus, OH</Text>
          {/* <Text style={styles.lineThree}>Location</Text> */}
        </View>
      </View>

      <Text styles={styles.title}>My Posts:</Text>
      
      {/* My Posts Section */}
      <View style={styles.myPost}>
        <View styles={styles.myPost_item}>
          <Text styles={styles.myPost_item_image}>Image</Text>
          <View styles={styles.myPost_item_details}>
            <Text styles={styles.myPost_item_name}>Teddy Bear</Text>
            <Text styles={styles.myPost_item_value}>+120 KP</Text>
          </View>
        </View>
        <View styles={styles.myPost_item}>
          <Text styles={styles.myPost_item_image}>Image</Text>
          <View styles={styles.myPost_item_details}>
            <Text styles={styles.myPost_item_name}>Rocking Horse</Text>
            <Text styles={styles.myPost_item_value}>+1,000 KP</Text>
          </View>
        </View>
      </View>

      {/* Looking For Section */}
      <View style={styles.lookingFor}>
        <Text>Looking For:</Text>
        <Text>Winter Coat</Text>
        <Text>Doll House</Text>
      </View>



      {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}

      {/* <Pressable style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          title="Log In"
          onPress={() => navigation.navigate("home")}
        >
          Log In
        </Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({

  /* &&&&&&&&&&&&&&&&&&& Major Views Styles &&&&&&&&&&&&&&&&&&& */

  //Big Container
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
    height: '100%'
  },

  //Navbar
  navBar: {
    backgroundColor: "#6AFF4D",
    width: "100%",
    flex: 1
  },

  //Profile View
  profile: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //My Posts
  myPost: {
    backgroundColor: "orange",
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },

  //Looking For
  lookingFor: {
    backgroundColor: "yellow",
    width: '100%',
    flex: 1.3
  },

  /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Child Styles &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

  /* !!!!!!!!!!!!!!!!! Profile !!!!!!!!!!!!!!!!! */
  profile_left: {
    backgroundColor: '#99BBFF',
    height: '90%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profile_image: {
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    backgroundColor: '#FF6619'
  },

  profile_right: {
    backgroundColor: '#FF99EE',
    height: '90%',
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  // profile_lineOne: {

  // },

  /* !!!!!!!!!!!!!!!!! My Posts !!!!!!!!!!!!!!!!! */

  title: {
    color: '#55FF33'
  },

  myPost_item: {
    backgroundColor: '#FF99EE',
    width: '45%',
    height: '45%',
    flex: 1
  },

  myPost_item_image: {

  },

  myPost_item_details: {

  },

  myPost_item_name: {

  },

  myPost_item_value: {

  },

  /* !!!!!!!!!!!!!!!!! Looking For !!!!!!!!!!!!!!!!! */

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

export default AccountInfo;