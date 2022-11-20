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

        <Navbar />    
          {/* <View style={styles.navbar}>
              <Button title="MENU BUtton"></Button>
              <Text>The Village</Text>
              <Button title="Pic"></Button>
        </View> */}
        
        <View style={styles.headerTopContainer}>
          <Text style={styles.headerTop}>What are you looking for? </Text>
        </View>
           
        <View style={styles.categories}>
          <View style={styles.categoriesTop}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Clothing">Clothing</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Toys">Toys</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Books">Books</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesMidOne}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Coats">Coats</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Shoes">Shoes</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesMidTwo}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Education">Education</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Infant">Infant</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Stuffed">Stuffed</Text>
            </Pressable>
          </View>

          <View style={styles.categoriesBottom}>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Games">Games</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
            <Text style={styles.loginText} title="Toddler">Toddler</Text>
            </Pressable>
          </View>
        </View>

           
            <Text>Tell us about yourself</Text>
          <StatusBar style="auto" />
          
          
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
     
          <TouchableOpacity style={styles.loginBtn}>
            <Button style={styles.loginText} title="Lets GO!" onPress = {() => navigation.navigate("home")}></Button>
          </TouchableOpacity>
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
     
      image: {
        marginBottom: 40,
      },
     
      inputView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#978DF3",
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
        backgroundColor: "#978DF3",
      },

      top:{
        backgroundColor: "red",
        // flexDirection: "column",
        flex: 1,
      },

      // navbar: {
      //   flex: 1,
      //   flexDirection: "row",
      //   alignItems: "flex-start",
      //   justifyContent: "space-between",
      //   height: 45,
      //   width: "100%",
      // },

      headerTopContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        marginLeft: 40,
      },

      headerTop: {
        fontSize: 20,
        fontWeight: "400",
        fontFamily: "Times New Roman"
      },

      categories: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "gray"
      },

      categoryBtn: {
        justifyContent: "center",

        // width: "100%",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "gray"
      },

      categoriesTop: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: "100%",
        width: "100%",
      },

      categoriesMidOne: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: "100%",
        width: "100%",
      },

      categoriesMidTwo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: "100%",
        width: "100%",
      },

      categoriesBottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: "100%",
        width: "100%",
      },

    });

    export default Login;