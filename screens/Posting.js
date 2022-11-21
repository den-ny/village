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
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";
function Posting({ navigation }) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const [selectedA, setSelectedA] = useState(false);
  const [selectedB, setSelectedB] = useState(false);
  const [selectedC, setSelectedC] = useState(false);
  const [selectedD, setSelectedD] = useState(false);

  const [images, setImages] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Navbar/> */}
      <View style={styles.name}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Give your posting a name!</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput onChangeText={(itemName) => setItemName(itemName)} />
          <Text style={styles.textInput}>{itemName}</Text>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.text}>Tell the town about your item</Text>
        <View style={styles.inputViewTwo}>
          <TextInput
            style={styles.textBox}
            placeholder="Please enter brief description of your item"
            onChangeText={(itemDescription) =>
              setItemDescription(itemDescription)
            }
          >
            <Text style={styles.textInputTwo}>{itemDescription}</Text>
          </TextInput>
        </View>
      </View>

      <View style={styles.condition}>
        <Text style={styles.text}>How's the condition?</Text>

        <View style={styles.leftAndRight}>
          <View style={styles.left}>
            <Text style={styles.a}>Like New</Text>
            <Text style={styles.a}>Gently Used</Text>
            <Text style={styles.a}>Used</Text>
            <Text style={styles.a}>Well Loved</Text>
          </View>

          <View style={styles.right}>
            <View style={styles.rightA}>
              <Text style={styles.b}>Pets?</Text>
              <View style={styles.option}>
                <TouchableOpacity
                  onPress={() => setSelectedA(!selectedA)}
                  style={{
                    backgroundColor: selectedA ? "#978DF3" : "transparent",
                  }}
                >
                  <Text style={styles.bb}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedB(!selectedB)}
                  style={{
                    backgroundColor: selectedB ? "#978DF3" : "transparent",
                  }}
                >
                  <Text style={styles.bb}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rightA}>
              <Text style={styles.b}>Non-smoker?</Text>
              <View style={styles.option}>
                <TouchableOpacity
                  onPress={() => setSelectedC(!selectedC)}
                  style={{
                    backgroundColor: selectedC ? "#978DF3" : "transparent",
                  }}
                >
                  <Text style={styles.bb}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setSelectedD(!selectedD)}
                  style={{
                    backgroundColor: selectedD ? "#978DF3" : "transparent",
                  }}
                >
                  <Text style={styles.bb}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.photos}>
        <Text style={styles.text}>Add Photos?</Text>
        <Pressable style={styles.photos}>
          <Button title="Select Images" onPress={pickImage} />
          {images && <Image source={{ uri: images }} style={styles.imgStyle} />}
        </Pressable>
      </View>
      <View style={styles.footer}>
        <FooterNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 5,
  },
  name: {
    // borderWidth: 2,
    // top: 0
  },
  description: {
    marginVertical: 5,
  },

  text: {
    fontSize: 28,
  },

  inputView: {
    borderRadius: 5,
    borderColor: "gray",
    width: "60%",
    borderWidth: 1,
    height: 20,
    marginVertical: 10,

    alignItems: "center",
  },
  inputViewTwo: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    marginVertical: 10,
    height: 100,
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },

  textInput: {
    height: 100,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
    // width: "100%",
  },
  textInputTwo: {
    height: 200,
    flex: 1,
    padding: 100,

    // marginLeft: 20,
    // width: "100%",
  },
  textBox: {
    margin: 5,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 100,
    // color: "#978DF3",
    fontFamily: "Times New Roman",
  },
  condition: {
    height: "25%",
  },
  leftAndRight: {
    // borderWidth: 2,
    // borderColor: "red",
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-evenly",
    height: "80%",
  },
  left: {
    borderColor: "black",
    flexDirection: "column",
    width: "55%",
    borderRaidus: 2,
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  a: {
    borderWidth: 1,
    borderColor: "#B7D0FE",
    textAlign: "center",

    fontSize: 16,
    color: "#978DF3",
    width: "100%",
  },
  right: {
    borderColor: "black",
    justifyContent: "space-around",
  },
  b: {
    fontSize: 22,
    marginVertical: 5,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bb: {
    textAlign: "center",
    width: "140%",
    color: "#B7D0FE",
    height: 25,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    fontSize: 20,
  },
  photos: {},
  imgStyle: {
    width: 100,
    height: 100,
  },
  footer: {
    bottom: 0,
    height: 75,
    position: "absolute",
    width: "100%",
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Posting;
