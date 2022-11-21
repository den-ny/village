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
    //   allowsMultipleSelection: true,
    //   selectionLimit: 2,
    //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets[0].uri);
    //   setRedo(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navbar />
{/* <View style={styles.container}> */}
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
        <Text style={styles.text} >Tell the town about your item</Text>
        <View style={styles.inputViewTwo}>
          <TextInput
            style={styles.textBox} 
            placeholder="Please enter brief description of your item"
                        onChangeText={(itemDescription) =>
              setItemDescription(itemDescription)
            }
          >
            <Text style={styles.textInputTwo} >{itemDescription}</Text>
          </TextInput>
        </View>
      </View>

      
      <View style={styles.condition}>
      {/* <View style={styles.condition}> */}
        <Text style={styles.text}>How's the condition?</Text>
      {/* </View>   */}
        <View style={styles.leftAndRight}>
          <View style={styles.left}>
            <Text style={styles.a}>Like New</Text>
            <Text style={styles.a}>Gently Used</Text>
            <Text style={styles.a}>Used</Text>
            <Text style={styles.a}>Well Loved</Text>
          </View>
            {/* <Button title=""></Button> */}
          <View style={styles.right}>
            <View style={styles.rightA}>
            <Text style={styles.b}>Pets?</Text>
            <View style={styles.option}>
            <TouchableOpacity
        onPress={() => setSelectedA(!selectedA)}
        style={{ backgroundColor: selectedA ? "#978DF3" : "transparent"
        
    }}
      >
            <Text style={styles.bb}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
        onPress={() => setSelectedB(!selectedB)}
        style={{ backgroundColor: selectedB ? "#978DF3" : "transparent"
        
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
        style={{ backgroundColor: selectedC ? "#978DF3" : "transparent"
        
    }}
      >
                <Text style={styles.bb}>Yes</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
        onPress={() => setSelectedD(!selectedD)}
        style={{ backgroundColor: selectedD ? "#978DF3" : "transparent"
        
    }}
    
      >
                <Text style={styles.bb}>No</Text>
       </TouchableOpacity>         
       </View>
              </View>
          </View>
        </View>
      </View>

      <View styles={styles.photos}>
        <Text style={styles.text}>Add Photos?</Text>
        {/* <Pressable style={styles.photos}> */}
        <View
        style={{
        //   flex: 1,
        //   alignSelf: "center",
        //   justifyContent: "space-between",
        }}
      >
        <Button title="Select Images" onPress={pickImage} />
        <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
          {images && (
            <Image source={{ uri: images }} style={styles.imgStyle} />
          )}
        </View>
        
      </View>
        {/* </Pressable> */}
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    height: "100%",
    //   flexDirection: "row",
      backgroundColor: "yellow",
    //   alignItems: "flex-end",
    // alignContent: "space-between",
    // alignSelf:"center",
    // flexDirection:"column",
    margin: 5,
    // width: "100%",
    //   justifyContent: "space-evenly",
      
    //   flexDirection:"column",
    //   justifyContent:"flex-end",
      
    // borderWidth: 1,
    },
    name:{
        borderColor: "green",
        borderWidth: 2,
        
    },
    description:{
        borderWidth: 2,
        borderColor: "red",
        marginVertical: 5,
    },
  text: {
    fontSize: 28,
    // margin: 2,
  },

  inputView: {
    // backgroundColor: "#fff",
    // backgroundColor: "red",
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: "gray",
    width: "60%",
    borderWidth: 1,
    height: 20,
    marginVertical: 10,

    alignItems: "center",
    // margin: 10,
  },
  inputViewTwo: {
    
    borderRadius: 10,
    borderWidth: 1,
    
    borderColor: "gray",
    width: "100%",
    marginVertical: 10,
    height: 100,
    shadowColor: "black",
    shadowRadius: 3,  
    // shadowOffset: {width: -2, height: 4},  
    shadowOpacity: 0.2,  
    // marginBottom: 20,

    // alignItems: "center",
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
  textBox:{
    margin: 5,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 100,
    color: "#978DF3",
    fontFamily: "Times New Roman",
  },
  condition: {
    // backgroundColor: "#fff",
    // backgroundColor: "red",
    // borderRadius: 3,
    borderWidth: 1,
    
    // padding: 10,
    borderColor: "green",
    // height: 100,
    // alignItems: "flex-st",
    height: "25%",
  },
  leftAndRight:{
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-evenly",
    height: "80%",
  },
  left:{
    borderWidth: 1,
    // borderColor: "black",
    flexDirection: "column",
    width: "55%",
    borderRaidus: 2,
    // justifyContent: "spa"
    alignContent:"center",
    justifyContent:"space-evenly",
    // paddingHorizontal:"10%",
    // padding: 10,
  },
  a:{
    borderWidth: 1,
    borderColor: "#B7D0FE",
    textAlign: "center",
    // justifyContent: "center",
    fontSize: 16,
    color: "#B7D0FE",
    width: "100%",
  },
  right:{
    borderWidth: 1,
    borderColor: "black",
    // flexDirection: "column",
    // width: "30%",
    // alignSelf:"center",
    justifyContent: "space-around",
    

    // margin
  },
  b:{
    borderWidth: 1,
    // borderColor: "red",
    fontSize: 20,
    marginVertical: 5,
    // alignSelf: "center",
    // width: "100%",
    textAlign:"center",
    // flexDirection: "row",
    // flex: 1,
  },
  option:{
    flexDirection:"row",
    // flex: 1
    // alignSelf:"space-between",
    justifyContent:"space-around",
    // width: "50%",
    // width: "100%",
    borderWidth: 1,
    
  },
  bb:{
    // flexDirection:"row",
    // margin: 2
    textAlign:"center",
    width: "100%",
    color: "#B7D0FE",
    // height: "50%",
    borderWidth: 1,
    fontSize: 20,
    
    // borderColor: "red",
  }
});

export default Posting;