import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryTile from "../../components/category-tile";

const CategoryScreen = ({ navigation }) => {
  const pressHandler = (itemId) => {
    navigation?.navigate("MealsOverview", { categoryId: itemId });
  };

  const renderItems = (itemData) => {
    const { item } = itemData;
    return (
      <CategoryTile
        title={item?.title}
        color={item?.color}
        onPress={() => pressHandler(item?.id)}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item?.id}
      renderItem={renderItems}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
