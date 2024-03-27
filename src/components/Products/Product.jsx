// style css
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({
  idMeal: id,
  strMealThumb,
  strMeal,
  strCategory,
  strArea,
}) {
  return (
    <div className="component-wrap">
      <div className="component-img">
        <img className="component-img-src" src={strMealThumb} alt="#" />
      </div>

      <Link className="component-strMeal-link" to={`/filterMeal/${id}`}>
        <h3 className="component-strMeal">{strMeal}</h3>
      </Link>

      <p className="component-strCategory">{strCategory}</p>

      <p className="component-strArea">{strArea}</p>
    </div>
  );
}
