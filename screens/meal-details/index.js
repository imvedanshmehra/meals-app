import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetailsInfo from "../../components/meal-details-info";
import { ScrollView } from "react-native-gesture-handler";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../../components/icon-button";
import { FavoritesContext } from "../../store/context/favroites-context";

const MealDetails = ({ route, navigation }) => {
  const mealId = route?.params?.mealId;
  const favMealCtx = useContext(FavoritesContext);

  const meal = MEALS?.find((meal) => meal?.id === mealId);

  const isMealFavorite = favMealCtx?.id?.includes(mealId);

  const toggleMealFavoriteStatus = () => {
    if (isMealFavorite) {
      favMealCtx?.removeFavorite(mealId);
    } else {
      favMealCtx?.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? "heart" : "heart-outline"}
            color={"white"}
            iconStyle={styles.iconStyle}
            onPress={toggleMealFavoriteStatus}
          />
        );
      },
    });
  }, [navigation, toggleMealFavoriteStatus]);

  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetailsInfo
        duration={meal?.duration}
        affordability={meal?.affordability}
        complexity={meal?.complexity}
      />
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {meal?.ingredients?.map((ingredient) => (
          <Text key={ingredient} style={styles.listItems}>
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Steps</Text>
        {meal?.steps?.map((step) => (
          <Text key={step} style={styles.listItems}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  listContainer: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  listItems: {
    backgroundColor: "#535C91",
    marginVertical: 4,
    padding: 12,
    width: "70%",
    borderRadius: 4,
    overflow: "hidden",
    color: "white",
  },
  iconStyle: {
    marginRight: 8,
    justifyContent: "center",
  },
});
