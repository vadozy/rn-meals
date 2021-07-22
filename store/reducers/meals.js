import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const mealId = action.mealId;
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === mealId
      );
      if (existingIndex >= 0) {
        const newFavMeals = [...state.favoriteMeals];
        newFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: newFavMeals };
      } else {
        const newFavMeal = state.allMeals.find((meal) => meal.id === mealId);
        const newFavMeals = [...state.favoriteMeals, newFavMeal];
        return { ...state, favoriteMeals: newFavMeals };
      }
    case SET_FILTERS:
      const filters = action.filters;
      const filteredMeals = state.allMeals.filter(
        (m) =>
          !(
            (filters.isGlutenFree && !m.isGlutenFree) ||
            (filters.isLactoseFree && !m.isLactoseFree) ||
            (filters.isVegan && !m.isVegan) ||
            (filters.isVegetarian && !m.isVegetarian)
          )
      );
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
