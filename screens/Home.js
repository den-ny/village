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
      <Text>Home Clothing Toys Books Shoes</Text>
      <ScrollView style={styles.top} horizontal>
        {/* <Text>{posts.Title}</Text> */}
        {/* <Button title="dsaiojdsaiop" onPress = {() => navigation.navigate("home")}></Button> */}
        {/* <Text>Winer Coat</Text> */}
        {/* <Item name={'Winner Coat'}/> */}
        <View style={styles.bigbox}>
          <Text>Image</Text>
          <Text>Winner Coat</Text>
        </View>
      </ScrollView>
      <Text style={styles.header}>Newest</Text>
      <ScrollView style={styles.scroll}>
      <View style={styles.bottom}>
        <View style={styles.small}>
          <Text>Rocking Horse</Text>
        </View>
        <View style={styles.small}>
          <Text>Winter Coat</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.small}>
          <Text>Play Mat</Text>
        </View>
        <View style={styles.small}>
          <Text>Boot</Text>
        </View>
      </View>
      {/* <View style={styles.bottom}>
        <View style={styles.small}>
          <Text>Petter Rabbit</Text>
        </View>
        <View style={styles.small}>
          <Text>Snow Pants</Text>
        </View>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    //   marginHorizontal: 30,
    backgroundColor: "yellow",
    margin: 10,
    justifyContent:"space-between",
    height: "100%",
    // flexDirection:"column",
  },
  imgStyle: {
    width: 200,
    height: 200,
  },
  bigbox: {
    borderRadius: 10,
    backgroundColor: "red",
    height: 100,
    width: 100,
    // flexDirection: "row",
  },
  small: {
    borderRadius: 15,
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  top: {
    // margin: 100,
    // padding: 10,
    backgroundColor: "orange",
    // flex: 1,
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  bottom: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-between",
    backgroundColor: "grey",
    width: "90%",
    margin: 10,
    padding: 10,
  },
});
