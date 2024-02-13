import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.container]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 140,
    borderRadius: 8,
    elevation: 3,
    overflow: Platform.android ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
