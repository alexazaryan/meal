import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilterCategories } from "../../../api";
import MealList from "../../components/MealList/MealList";
import Button from "../../components/Button/Button";

// stele.css
import "./Category.css";

export default function Category() {
  // url
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterCategories(name).then((data) => {
      data.meals && setMeals(data.meals);
    });
  }, [name]);

  return (
    <div className="Category">
      <Button />
      <MealList meals={meals} />
    </div>
  );
}
