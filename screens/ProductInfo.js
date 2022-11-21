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
  Pressable
} from "react-native";
import Navbar from "../components/Navbar";
function ProductInfo({navigation}) {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Image style={styles.image} source={require("../assets/.png")} /> */}
     
          

        <View>
          <View style={styles.imgContainer}>
          <Image source={require('../images/winter-coat.png')} style={styles.image}/>
          </View>

          <View style={styles.productDetailContainer}>
            <View style={styles.productNameContainer}>
              <Text style={styles.productName}>Winter Coat</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.location}>Columbus, OH</Text>  
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.productDescription}>Like-new, gently used winter coat for ages 1-2 years. Bought for my nephew recently and it did not fit him. Hoping it finds someone in need!</Text>
            </View>

            <View style={styles.btnContainer}>
            <Pressable style={styles.btn}>
          <Text style={styles.btnText} title="Place a Hold" onPress={() => navigation.navigate("")}>Place a Hold</Text>
              </Pressable>
              <Pressable style={styles.btn}>
          <Text style={styles.btnText} title="Contact Owner" onPress={() => navigation.navigate("AccountInfo")}>Contact Owner</Text>
          </Pressable>
            </View>
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

      imgContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",
        width: "100%",
        height: "50%"
      },
     
      image: {
        width: "100%",
      },
    
      productDetailContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        width: "100%",
        // height: "20%",
        backgroundColor: "#B7B0FE"
      },

      productNameContainer: {
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: "90%",
        marginLeft: 30,
        marginTop: 30,
      },

      productName: {
        fontSize: 32,
        width: "100%",
        fontWeight: "700",
        color: "#FFFEF8",
        fontFamily: "Times New Roman",
      },

      locationContainer: {
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: "0%",
        // marginTop: 30,
      },

      location: {
        fontSize: 14,
        width: "100%",
        fontWeight: "500",
        // marginBottom: 0,
        color: "#FFF",
        fontFamily: "Times New Roman",
        marginLeft: 40,
      },

      descriptionContainer: {
        flex: 2,
        width: "80%",
      },

      productDescription: {
        fontSize: 18,
        fontFamily: "Times New Roman",
        color: "#FFFEF8",
        fontWeight: "600",
      },

      btnContainer: {
        flex: 2,
        width: "80%",
        height: "10%",
        flexDirection: "row",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "space-evenly",
        padding: 4,
      },

      btn: {
        backgroundColor: "#403A7A",
        borderRadius: 8,
        width: "45%",
        height: "25%",
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
      },

      btnText: {
        color: "#FFFEF8",
        fontSize: 12,
      }


    });

    export default ProductInfo;