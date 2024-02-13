import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import MealsCategory from "../meals-category";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  const handleMealCategoryPress = (mealId) => {
    navigation?.navigate("MealDetails", { mealId });
  };

  const mealsRenderer = (itemData) => {
    const { item } = itemData;

    const mealsCategoryProps = {
      title: item?.title,
      itemImage: item?.imageUrl,
      duration: item?.duration,
      affordability: item?.affordability,
      complexity: item?.complexity,
      onPress: () => handleMealCategoryPress(item?.id),
    };

    return <MealsCategory {...mealsCategoryProps} />;
  };

  return (
    <FlatList
      keyExtractor={(item) => item?.id}
      data={items}
      renderItem={mealsRenderer}
    />
  );
};

export default MealsList;
