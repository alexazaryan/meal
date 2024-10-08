import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const FoodContext = createContext();

const initialState = {
  receipt: [],
  catalog: [],
  loading: true,
  findProductBySearch: [],
};
// console.log(loading);

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.setMealsByCatalog = (mealsCatalog) => {
    dispatch({ type: "SET_MEALS_BY_CATALOG", payload: mealsCatalog });
  };

  // catalog lessen start
  value.oldCatalog = (data) => {
    dispatch({ type: "OLD_CATALOG", payload: data });
  };
  // catalog lessen end

  //
  value.setSearchMealByName = (mealName) => {
    dispatch({ type: "SEARCH_PRODUCT", payload: mealName });
  };
  //

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
