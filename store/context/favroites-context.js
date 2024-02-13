const { createContext, useState } = require("react");

export const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavMealIds((prevFavMealIds) => [...prevFavMealIds, id]);
  };

  const removeFavorite = (id) => {
    setFavMealIds((prevFavMealIds) =>
      prevFavMealIds?.filter((mealId) => mealId !== id)
    );
  };

  const initialValues = {
    id: favMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={initialValues}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
