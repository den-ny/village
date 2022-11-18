import { StyleSheet, Pressable, View } from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";

const CloseModal = ({ nav, localMargin, color, toStart }) => {
  const { container, button } = styles;

  return (
    <View style={[container, localMargin && { width: "90%" }]}>
      <Pressable
        onPress={
          toStart ? () => nav.navigate("home") : () => nav.goBack()
        }
      >
        {/* <FontAwesome name="long-arrow-left" size={24} color={color} /> */}
      </Pressable>
      <Pressable style={button} onPress={() => nav.navigate("home")}>
        {/* <EvilIcons name="close" size={20} color={color} /> */}
      </Pressable>
    </View>
  );
};
export default CloseModal;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

