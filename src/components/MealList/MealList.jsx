import Meal from "../Meal/Meal";

export default function MealList({ meals }) {
  return (
    <div>
      {meals.map((item) => {
        return <Meal key={item.idMeal} {...item} />;
      })}
    </div>
  );
}
