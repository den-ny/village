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

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.burgerMenu}>
       <Text style={styles.burgerMenuTwo} title="Hamburger" onPress={() => navigation.navigate("home")}></Text>
      </Pressable>
    <Text style={styles.title}>Village</Text>
    <Pressable style={styles.profileIcon}>
       <Text style={styles.iconImage} title="Profile Icon" onPress={() => navigation.navigate("home")}></Text>
      </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 45,
    width: "100%",
  },

  title: {
    fontSize: 28,
    marginBottom: -5,
    fontFamily: "Times New Roman",
    padding: -15,
    fontWeight: "450"
  }
})

export default Navbar;