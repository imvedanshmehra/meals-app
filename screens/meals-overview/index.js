import { MEALS, CATEGORIES } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../../components/meals-list";

const MealsOverview = ({ route, navigation }) => {
  const catId = route?.params?.categoryId;

  const meals = MEALS?.filter((meal) => meal?.categoryIds?.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES?.find((cat) => cat?.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={meals} />;
};

export default MealsOverview;
