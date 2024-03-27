import { Link } from "react-router-dom";

// Stele.css
import "./GoodItem.css";

export default function GoodItem({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <div className="wrap">
      <div className="wrap-category">
        <div className="strCategoryThumb">
          {/* link of img*/}
          <Link
            className="link-strCategoryThumb-img"
            to={`/categories/${strCategory}`}
          >
            <img className="img" src={strCategoryThumb} alt="#" />
          </Link>
        </div>
        <div className="strCategory">
          <h3 className="strCategory-h3">{strCategory}</h3>
        </div>
        <div className="strCategoryDescription">
          <a>{strCategoryDescription.slice(0, 60)}...</a>
        </div>
        <div className="link">
          {/* почитать */}
          <Link className="link-categories" to={`/categories/${strCategory}`}>
            Watch categories
          </Link>
        </div>
      </div>
    </div>
  );
}
