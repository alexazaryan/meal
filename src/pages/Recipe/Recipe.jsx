import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../api";
import Button from "../../components/Button/Button";

// style.css
import "./Recipe.css";
import { FoodContext } from "../../../context/context";

export default function Recipe() {
  const {} = useContext(FoodContext);

  const { id } = useParams();

  // object position recipe
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getProductById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <div className="recipe-wrap">
      <Button />

      <div className="recipe-box">
        <div className="recipe-box-left">
          <div className="recipe-wrap-img">
            <img className="recipe-img" src={recipe.strMealThumb} alt="#" />
          </div>
          <h2 className="recipe-title">{recipe.strMeal}</h2>

          <p>
            <strong className="recipe-strong">Category: </strong>{" "}
            {recipe.strCategory}
          </p>
          <p>
            <strong className="recipe-strong">Area: </strong>
            {recipe.strArea}
          </p>
        </div>

        {/* блок ингридиентов */}
        <div className="recipe-box-right">
          <div>
            <h1 className="recipe-title-ingredients">Recipe</h1>
            {/* table start*/}
            <table className="recipe-table">
              <thead>
                <tr className="recipe-table-td">
                  <td className="td">Ingredients</td>
                  <td className="td">Measure</td>
                </tr>
              </thead>
              <tbody className="recipe-tbody">
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          {/* table end*/}

          {recipe.strYoutube ? (
            <div className="recipe-youtube">
              <h2 className="name-video">Video recipe</h2>
              <iframe
                title={id}
                allowFullScreen
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
              ></iframe>
            </div>
          ) : null}
        </div>
      </div>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
