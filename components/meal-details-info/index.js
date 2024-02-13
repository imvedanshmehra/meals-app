import { StyleSheet, Text, View } from "react-native";

const MealDetailsInfo = ({ duration, affordability, complexity }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>{duration}m</Text>
      <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
      <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetailsInfo;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  detailsText: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
});
