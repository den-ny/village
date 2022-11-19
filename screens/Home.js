import { StyleSheet, SafeAreaView, Text, View, Button, Image, StatusBar, Pressable } from "react-native";
import { useEffect, useState } from 'react';
import { getPosts } from "../services/posts";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const postsData = await getPosts();
//       setPosts(postsData);
//     };

//     fetchPosts();
//   }, []);
// }

const Home = ({ navigation, route }) => {
    <SafeAreaView style={styles.container}>
        <Button title="="></Button>
        <Text>The Village</Text>
        <Button title = ")"></Button>

        <Text>dsaiohdioshsadio</Text>
        {/* <Button title="dsaiojdsaiop" onPress = {() => navigation.navigate("home")}></Button> */}
    </SafeAreaView>
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