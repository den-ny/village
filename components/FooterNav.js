

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
       <Text style={styles.homeBtn} title="Home" onPress={() => navigation.navigate("home")}>Home</Text>
      </Pressable>

    <Pressable style={styles.msgBtnContainer}>
       <Text style={styles.msgBtn} title="Messages" onPress={() => navigation.navigate("Inbox")}>Messages</Text>
      </Pressable>
      <Pressable style={styles.postBtnContainer}>
       <Text style={styles.postBtn} title="Hamburger" onPress={() => navigation.navigate("")}>+</Text>
      </Pressable>

    <Pressable style={styles.searchBtnContainer}>
       <Text style={styles.searchBtn} title="Profile Icon" onPress={() => navigation.navigate("")}>Search</Text>
      </Pressable>
      <Pressable style={styles.acctBtnContainer}>
       <Text style={styles.acctBtn} title="Profile Icon" onPress={() => navigation.navigate("AccountInfo")}>Account</Text>
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
    width: "80%",
    backgroundColor: "#FFFEF8",
    borderRadius: 25,
  },
})

export default FooterNav;