import { Link } from "react-router-dom";

// style.css
import "./Meal.css";

export default function Meal({ strMeal, strMealThumb, idMeal }) {
  return (
    <div className="wrap">
      <div className="meal-box">
        <div className="wrap-img">
          <Link className="link-meal-img" to={`/meal/${idMeal}`}>
            <img className="meal-img" src={strMealThumb} alt="#" />
          </Link>
        </div>
        <h3 className="meal-title">{strMeal.slice(0, 30)}</h3>
        <div className="link">
          <Link className="link-meal" to={`/meal/${idMeal}`}>
            Watch Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
