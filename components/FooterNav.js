import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";

const FooterNav = ({ color }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Pressable style={styles.homeBtnContainer}>
        <FontAwesome
          name="home"
          size={36}
          color="#B9D4DC"
          onPress={() => navigation.navigate("home")}
        />
      </Pressable>

      <Pressable style={styles.notiBtnContainer}>
        <Ionicons
          name="notifications-outline"
          size={36}
          color="#B9D4DC"
          onPress={() => navigation.navigate("")}
        />
      </Pressable>

      <Pressable style={styles.postBtnContainer}>
        <AntDesign
          name="pluscircle"
          size={40}
          color="#B9B1FF"
          style={styles.postBtn}
          onPress={() => navigation.navigate("Posting")}
        />
      </Pressable>

      <Pressable style={styles.searchBtnContainer}>
        <AntDesign
          name="search1"
          size={36}
          color="#B9D4DC"
          onPress={() => navigation.navigate("")}
          style={styles.searchBtn}
        />
      </Pressable>

      <Pressable style={styles.msgBtnContainer}>
        <AntDesign
          name="message1"
          size={36}
          color="#B9D4DC"
          style={styles.msgBtn}
          onPress={() => navigation.navigate("Inbox")}
        />
      </Pressable>
    </View>
  );
};

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

  footNavText: {
    fontSize: 48,
    zIndex: 0,
  },

  homeTextBtn: {
    zIndex: 0,
  },

  homeBtn: {
    zIndex: 1000,
  },

  // homeBtnContainer: {
  //   width: "20%"
  // },
});

export default FooterNav;
