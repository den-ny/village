import { useNavigation } from "@react-navigation/native";
import React from "react";
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

function Landing() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Big Pic Section */}
      <View style={styles.bigPic_wrapper}>
          <Image style={styles.bigPic_image} source={require('../assets/teddy_bear_landing.png')}></Image>
      </View>
      
      {/* Branding Section */}
      <View style={styles.branding}>
        <View style={styles.branding_top}>
          <Text style={styles.branding_lineOne}>Reducing waste.</Text>
          <Text style={styles.branding_lineTwo}>One <Text style={styles.text_colored}>smile</Text> at a time</Text>
        </View>
        <View style={styles.branding_bottom}>
          <Text style={styles.branding_lineThree}>It takes a</Text>
          <Text style={styles.branding_lineFour}>Village</Text>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttons}>
        <Pressable style={styles.buttons_signup}>
          <Text style={styles.buttons_signup_text} onPress={() => navigation.navigate("SignUp")}>Get Started</Text>
        </Pressable>
        <View style={styles.buttons_login}>
          <Pressable>
            <Text style={styles.buttons_login} onPress={() => navigation.navigate("Login")}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  /* &&&&&&&&&&&&&&&&&&& Major Views Styles &&&&&&&&&&&&&&&&&&& */

  //Big Container
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
    height: '100%'
  },

  //Big Pic View
  bigPic_wrapper: {
    backgroundColor: "#FFFEF8",
    width: "100%",
    flex: 1.8,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //Branding
  branding: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'left',
    paddingLeft: '10%'
  },

  //Buttons
  buttons: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Child Styles &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

  /* !!!!!!!!!!!!!!!!! Big Pic !!!!!!!!!!!!!!!!! */

  bigPic_image: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },

  /* !!!!!!!!!!!!!!!!! Branding !!!!!!!!!!!!!!!!! */

  branding_lineOne: {
    fontSize: 20,
  },

  branding_lineTwo: {
    fontSize: 20,
  },

  branding_lineThree: {
    fontSize: 30,
  },

  branding_lineFour: {
    fontSize: 50,
    color: '#B7B0FE'
  },

  text_colored: {
    color: '#B7B0FE'
  },


  /* !!!!!!!!!!!!!!!!! Buttons !!!!!!!!!!!!!!!!! */

  buttons_signup: {
    width: 200,
    height: 60,
    backgroundColor: '#B7B0FE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 20,
  },

  buttons_signup_text: {
    color: '#FFFEF8'
  },

  buttons_login: {
    marginTop: 15,
    color: '#B7B0FE'
  }
  
});

export default Landing;