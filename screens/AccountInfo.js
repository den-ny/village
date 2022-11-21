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
          <Image style={styles.profile_image} source={require('../assets/profilepic.png')}></Image>
        </View>
        <View style={styles.profile_right}>
          <View style={styles.profile_lineOne}>
            <Text style={styles.profile_lineOne_text}>Karma Points</Text>
          </View>
          <View style={styles.profile_lineTwo}>
            <Image style={styles.profile_lineThree_image} source={require('../assets/hand_icon.png')}></Image>
            <Text style={styles.profile_lineTwo_text}>1300 KP</Text>
          </View>
          <View style={styles.profile_lineThree}>
            <Image style={styles.profile_lineThree_image} source={require('../assets/location_icon.png')}></Image>
            <Text style={styles.profile_lineThree_text}>Columbus, OH</Text>
          </View>
        </View>
      </View>
      
      {/* My Posts Section */}
      <View style={styles.myPost}>
        <Text style={styles.myPost_title}>My Posts:</Text>
        <View style={styles.myPost_item}>
          <Image style={styles.myPost_item_image} source={require('../assets/rocking-horse.png')}></Image>
          <View style={styles.myPost_item_details}>
            <Text style={styles.myPost_item_name}>Rocking Horse</Text>
            <Text style={styles.myPost_item_value}>+1,000 KP</Text>
          </View>
        </View>
        <View style={styles.myPost_item}>
          <Image style={styles.myPost_item_image} source={require('../assets/onesie.png')}></Image>
          <View style={styles.myPost_item_details}>
            <Text style={styles.myPost_item_name}>Onesie</Text>
            <Text style={styles.myPost_item_value}>+300 KP</Text>
          </View>
        </View>
      </View>

      {/* Looking For Section */}
      <View style={styles.lookingFor}>
        <Text style={styles.lookingFor_title}>Looking For:</Text>
          <View style={styles.lookingFor_item}>
            <Image style={styles.lookingFor_item_image } source={require('../assets/tutu-dress.png')}></Image>
            <View style={styles.lookingFor_item_details}>
              <Text style={styles.lookingFor_item_name}>Dress with Tutu</Text>
            </View>
          </View>
          <View style={styles.lookingFor_item}>
            <Image style={styles.lookingFor_item_image} source={require('../assets/raincoat.png')}></Image>
            <View style={styles.lookingFor_item_details}>
              <Text style={styles.lookingFor_item_name}>Raincoat</Text>
            </View>
          </View>
      </View>

      {/* Would put Menu Here */}
      <View style={styles.bottom}>

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
    backgroundColor: "#FFFEF8",
    width: "100%",
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //My Posts
  myPost: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '5%'

  },

  //Looking For
  lookingFor: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '5%'
  },

  //Space on the bottom
  bottom: {
    flex: 0.8
  },

  /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Child Styles &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

  /* !!!!!!!!!!!!!!!!! Profile !!!!!!!!!!!!!!!!! */

  profile_left: {
    backgroundColor: '#FFFEF8',
    height: '90%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profile_image: {
    width: '90%',
    height: '90%',
    borderRadius: '70%',
    backgroundColor: '#FF6619',
  },

  profile_right: {
    backgroundColor: '#FFFEF8',
    height: '90%',
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  profile_lineOne: {

  },

  profile_lineOne_text: {
    fontSize: 18,
    marginTop: 15
  },

  profile_lineTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    marginTop: 10,
  },

  profile_lineTwo_image: {
    resizeMode: 'contain',
    height: 25,
  },

  profile_lineTwo_text: {

  },

  profile_lineThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop: 10
  },

  profile_lineThree_image: {
    resizeMode: 'contain',
    height: 25,
  },

  profile_lineThree_text: {

  },

  /* !!!!!!!!!!!!!!!!! My Posts !!!!!!!!!!!!!!!!! */

  myPost_title: {
    position: 'absolute',
    top: '5%',
    left: '6%',
    fontSize: 20,
    color: 'black',
  },

  myPost_item: {
    backgroundColor: '#FFFEF8',
    width: '45%',
    height: '70%',
    borderRadius: 25,
    padding: 0
  },

  myPost_item_image: {
    borderRadius: 25,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },

  myPost_item_details: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    height: '50%',
    backgroundColor: 'rgba(151,141,243,0.80)',
    opacity: '5%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  myPost_item_name: {
    position: 'absolute',
    color: '#FFFEF8',
    top: '10%',
    left: '10%',
  },

  myPost_item_value: {
    color: '#FFFEF8',
  },

  /* !!!!!!!!!!!!!!!!! Looking For !!!!!!!!!!!!!!!!! */

  lookingFor_title: {
    position: 'absolute',
    top: '5%',
    left: '6%',
    fontSize: 20,
    fontWeight: 'bolder',
    color: 'black',
  },

  lookingFor_item: {
    backgroundColor: '#FFFEF8',
    width: '45%',
    height: '70%',
    borderRadius: 25,
    padding: 0
  },

  lookingFor_item_image: {
    borderRadius: 25,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },

  lookingFor_item_details: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    height: '50%',
    backgroundColor: 'rgba(151,141,243,0.80)',
    opacity: '5%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  lookingFor_item_name: {
    position: 'absolute',
    color: '#FFFEF8',
    top: '10%',
    left: '10%',
  },
});

export default AccountInfo;