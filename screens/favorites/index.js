import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../../store/context/favroites-context";
import { MEALS } from "../../data/dummy-data";
import MealsList from "../../components/meals-list";

const FavoritesScreen = () => {
  const favMealCtx = useContext(FavoritesContext);

  const favMeals = MEALS?.filter((meal) =>
    favMealCtx?.id?.find((favMealId) => meal?.id === favMealId)
  );

  if (!favMeals?.length)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.infoText}>You don't have any favorite meals.</Text>
      </View>
    );

  return <MealsList items={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
