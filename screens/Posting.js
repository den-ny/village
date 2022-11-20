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
import Navbar from "../components/Navbar";

function Posting({ navigation }) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
//   const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
        <Navbar/>
      
        <View style={styles.itemName}>
          <Text>Give your posting a name!</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder=""
            //   placeholderTextColor="#003f5c"
              onChangeText={(itemName) => setItemName(itemName)}
            />
          </View>
        </View>
      
        <View style={styles.itemDescription}>
          <Text>Tell the town about your item</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter description of your item"
            //   placeholderTextColor="#003f5c"
              onChangeText={(itemDescription) => setItemDescription(itemDescription)}
            />
          </View>
        </View>
      
        <View style={styles.condition}>
          <Text>How condition?</Text>
          <View style={styles.leftAndRight}>
              <View style={styles.left}>
                <Text>Like New</Text>
                <Text>Gently Used</Text>
                <Text>Used</Text>
                <Text>Well Loved</Text>
              </View>
              <View style={styles.right}>
                <Text>Pets?</Text>
                <Text>YES|NO</Text>
              </View>
              <View style={styles.right}>
              <Text>Non-smoker?</Text>
                <Text>YES|NO</Text>
              </View>
          </View>
        </View>


      <View styles={styles.photo}>
        
        <Text>Add Photos</Text>
        <Pressable style={styles.photos}>
        <Button
          style={styles.loginText}
          title="PHOTO"
          onPress={() => navigation.navigate("Upload")}
        >
          
        </Button>
      </Pressable>
      </View>



      {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}


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

export default Posting;