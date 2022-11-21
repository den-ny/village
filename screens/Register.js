import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Pressable
} from "react-native";

function Login({navigation}) {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
  return (
      
        <SafeAreaView style={styles.container}>
        {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
        <StatusBar style="auto" />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Village</Text>
        </View>
        
        <View style={styles.headerTopContainer}>
          <Text style={styles.headerTop}>What are you looking for? </Text>
        </View>
           
        <View style={styles.categories}>
          <View style={styles.categoriesTop}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Clothing">Clothing</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Toys">Toys</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Books">Books</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesMidOne}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Coats">Coats</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Shoes">Shoes</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesMidTwo}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Education">Education</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Infant">Infant</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Stuffed">Stuffed</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesBottom}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Games">Games</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.catText} title="Toddler">Toddler</Text>
            </Pressable>
          </View>
        </View>

           
        <View style={styles.headerTopContainer}>
          <Text style={styles.headerTop}>Tell us about yourself! </Text>
        </View>
          
          
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setName(name)}
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
            //   secureTextEntry={true}
              onChangeText={(user) => setUser(user)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
     
          {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity> */}
     
     <Pressable style={styles.loginBtn}>
          <Text style={styles.loginText} title="Log In" onPress={() => navigation.navigate("home")}>Let's Go!</Text>
          </Pressable>
        </SafeAreaView>
      );
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

      titleContainer: {
        flex: 0.2,
        fontSize: 32,
      },

      titleText: {
        fontSize: 32,
        fontWeight: "450",
        fontFamily: "Times New Roman"
      },
     
      image: {
        marginBottom: 40,
      },
     
      inputView: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#978DF3",
        width: "70%",
        height: 40,
        marginBottom: 20,
        alignItems: "flex-start",
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
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#6A62B7",
      },

      top:{
        backgroundColor: "red",
        flex: 1,
      },

      headerTopContainer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        marginLeft: 40,

      },

      headerTop: {
        fontSize: 20,
        fontWeight: "4500",
        fontFamily: "Times New Roman"
      },

      categories: {
        flex: 0.4,
        flexDirection: "column",
        alignItems: "space-evenly",
        justifyContent: "space-evenly",
        width: "90%",
        padding: 5,
        margin: 5,
      },

      categoryBtn: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 15,
        width: "25%",
        height: "95%",
        // width: "100%",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#978DF3"
      },

      categoriesTop: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        height: "100%",
        width: "100%",

      },

      categoriesMidOne: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        height: "100%",
        width: "100%",
      },

      categoriesMidTwo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        height: "100%",
        width: "100%",
      },

      categoriesBottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        height: "100%",
        width: "100%",
        marginBottom: 20,
      },

      catText: {
        color: "#6A62B7"
      },

      loginText: {
        color: "#FFF"
      }

    });

    export default Login;