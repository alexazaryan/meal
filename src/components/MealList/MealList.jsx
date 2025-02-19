import Meal from "../Meal/Meal";

import "./MealList.css";

export default function MealList({ meals }) {
  return (
    <div className="wrap-meal-list">
      {meals.map((item) => {
        return <Meal key={item.idMeal} {...item} />;
      })}
    </div>
  );
}
