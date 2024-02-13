import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetailsInfo from "../meal-details-info";

const MealsCategory = ({
  title,
  itemImage,
  affordability,
  complexity,
  duration,
  onPress,
}) => {
  return (
    <View style={styles?.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: itemImage }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <MealDetailsInfo
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealsCategory;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "white",
    overflow: Platform?.android ? "hidden" : "visible",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
});
