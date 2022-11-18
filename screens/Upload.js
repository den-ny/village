import { StyleSheet, SafeAreaView, View, Button, Image, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
// import { Next, CloseModal } from "../components";

const Upload = ({ navigation }) => {
  const [images, setImages] = useState(null);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsMultipleSelection: true,
    //   selectionLimit: 2,
      allowsEditing: true,
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
      
      {/* <CloseModal nav={navigation} /> */}
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <Button title="Select Images" onPress={pickImage} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {images && (
            <Image source={{ uri: images }} style={styles.imgStyle} />
          )}
        </View>
        <Button title=""></Button>
      </View>
      {/* {redo ? <Button title="Redo" onPress={pickImage} /> : null} */}
      <Button title="HOME" onPress = {() => navigation.navigate("home")}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  imgStyle: {
    width: 200,
    height: 200,
  },
});
export default Upload;