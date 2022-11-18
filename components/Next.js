import { StyleSheet, Text, View, Pressable } from "react-native";

const Next = ({ nav, to, text, localMargin, finished }) => {
  const { container, next, nextText } = styles;

  return (
    <View style={[container, localMargin && { width: "90%" }]}>
      <Pressable
        style={next}
        onPress={
          finished
            ? () =>
                nav.navigate("home", {
                  complete: true,
                  customSize: '20M'
                })
            : () => nav.navigate(to)
        }
      >
        <Text style={nextText}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default Next;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  next: {
    backgroundColor: "black",
    paddingVertical: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
  },
});
