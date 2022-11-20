import { StyleSheet, SafeAreaView, Text, View, Button, Image, StatusBar, Pressable } from "react-native";
import { useEffect, useState } from 'react';

const Home = ({ navigation, route }) => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch('https://ga-hackathon-backend.herokuapp.com/posts');
        const data = await response.json();
        setPosts(data)
      } catch(error) {
        console.log(error)
      }
    }

    getData();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Button title="="></Button>
      <Text>The Village</Text>
      <Button title = ")"></Button>

      <Text>{posts.Title}</Text>
      {/* <Button title="dsaiojdsaiop" onPress = {() => navigation.navigate("home")}></Button> */}
    </SafeAreaView>
  )
};
export default Home;

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   marginHorizontal: 30,
    backgroundColor:"red",
    },
    imgStyle: {
      width: 200,
      height: 200,
    },
  });