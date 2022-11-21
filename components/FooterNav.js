

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

const FooterNav = () => {
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.homeBtnContainer}>
       <Image source={require('../images/home-icon.png')} style={styles.homeBtn} title="Home" onPress={() => navigation.navigate("home")}/>
      </Pressable>

      <Pressable style={styles.notiBtnContainer}>
      <Image source={require('../images/noti-icon.png')} style={styles.notiBtn} title="Notifications" onPress={() => navigation.navigate("")}/>
      </Pressable>

      <Pressable style={styles.postBtnContainer}>
      <Image source={require('../images/post-icon.png')} style={styles.postBtn} title="Posting" onPress={() => navigation.navigate("Posting")}/>
      </Pressable>

    <Pressable style={styles.searchBtnContainer}>
    <Image source={require('../images/search-icon.png')} style={styles.searchBtn} title="Search" onPress={() => navigation.navigate("")}/>
      </Pressable>

      <Pressable style={styles.msgBtnContainer}>
    <Image source={require('../images/msg-icon.png')} style={styles.msgBtn} title="Message" onPress={() => navigation.navigate("Inbox")}/>
      </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0.75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 45,
    width: "85%",
    backgroundColor: "#f4f4fc",
    borderRadius: 25,
  },

  // homeBtnContainer: {
  //   width: "20%"
  // },

})

export default FooterNav;