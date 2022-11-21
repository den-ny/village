import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    View,
    Button,
    Image,
    StatusBar,
    Pressable,
    ImageBackground,
  } from "react-native";
  import { useEffect, useState } from "react";
  import Navbar from "../components/Navbar";
  const Home = ({ navigation, route }) => {
    const [posts, setPosts] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch(
            "https://ga-hackathon-backend.herokuapp.com/posts"
          );
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      getData();
    }, []);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Navbar />
        <View style={styles.textContainer}>
          <Text style={(styles.headerText, { fontWeight: "bold", fontSize: 20 })}>
            Home
          </Text>
          <Text style={styles.headerText}>Clothing</Text>
          <Text style={styles.headerText}>Toys</Text>
          <Text style={styles.headerText}>Books</Text>
          <Text style={styles.headerText}>Shoes</Text>
        </View>
        <ScrollView
          style={styles.top}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.bigImgContainer}>
            <ImageBackground
              style={styles.bigImg}
              resizeMode="cover"
              source={require("../assets/winter-coat.png")}
            >
              <View style={styles.imageContainer}>
                <Text style={styles.text}>Winter Coat</Text>
              </View>
            </ImageBackground>
  
            <ImageBackground
              style={styles.bigImg}
              resizeMode="cover"
              source={require("../assets/green-boots.png")}
            >
              <View style={styles.imageContainer}>
                <Text style={styles.text}>Boots</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
  
        <Text
          style={
            (styles.headerText,
            { fontSize: 20, fontWeight: "bold", margin: 5, marginBottom: -10 })
          }
        >
          Newest
        </Text>
  
        <ScrollView style={styles.bottom}>
          <View style={styles.smallImgContainer}>
            <View style={styles.subContainer}>
              <ImageBackground
                style={styles.smallImg}
                resizeMode="cover"
                source={require("../assets/winter-coat.png")}
              >
                <View style={styles.imageContainer}>
                  <Text style={styles.text}>Winter Coat</Text>
                </View>
              </ImageBackground>
  
              <ImageBackground
                style={styles.smallImg}
                resizeMode="cover"
                source={require("../assets/horse.png")}
              >
                <View style={styles.imageContainer}>
                  <Text style={styles.text}>Rocking Horse</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.subContainer}>
              <ImageBackground
                style={styles.smallImg}
                resizeMode="cover"
                source={require("../assets/playmat.png")}
              >
                <View style={styles.imageContainer}>
                  <Text style={styles.text}>PlayMat</Text>
                </View>
              </ImageBackground>
  
              <ImageBackground
                style={styles.smallImg}
                resizeMode="cover"
                source={require("../assets/green-boots.png")}
              >
                <View style={styles.imageContainer}>
                  <Text style={styles.text}>Boots</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      height: "100%",
    },
    textContainer: {
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 10,
    },
    headerText: {
      fontSize: 20,
    },
    bigImg: {
      width: 250,
      height: 250,
      marginHorizontal: 10,
    },
    smallImg: {
      width: 150,
      height: 150,
      marginHorizontal: 10,
    },
    bigImgContainer: {
      flexDirection: "row",
    },
    smallImgContainer: {
      alignSelf: "space-around",
      margin: 10,
      width: "100%",
    },
    subContainer: {
      width: "100%",
      flexDirection: "row",
      margin: 10,
      alignItems: "space-around",
    },
    top: {
      height: "31%",
    },
    text: {
      fontSize: 24,
      color: "white",
      fontWeight: "bold",
    },
    imageContainer: {
      bottom: 0,
      position: "absolute",
      backgroundColor: "#978DF3",
      height: "50%",
      width: "100%",
      opacity: 0.8,
      borderRadius: 10,
    },
  });
  