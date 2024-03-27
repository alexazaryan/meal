import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductBuId } from "../../../api";
import Button from "../../components/Button/Button";

// style css
import "./FilterMeal.css";

export default function FilterMeal() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  console.log(product);

  const getProductId = async () => {
    try {
      const data = await getProductBuId(id);
      setProduct(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductId();
  }, [id]);

  return (
    <div>
      {/*  */}
      <Button />
      {/*  */}
      <div className="product-filter-recipe-youtube">
        {/* img */}
        <div className="product-filter-meal">
          <img
            className="product-filter-meal-img"
            src={product.strMealThumb}
            alt="#"
          />
        </div>

        {/* table */}
        <div className="product-title-ingredients-wrap">
          <h2 className="product-title-ingredients">Recipe</h2>
          <div className="product-table-youtube">
            {/* table start*/}
            <table className="product-table">
              <thead>
                <tr className="product-table-td">
                  <td className="td">Ingredients</td>
                  <td className="td">Measure</td>
                </tr>
              </thead>

              {/* next */}
              <tbody className="product-tbody">
                {Object.keys(product).map((key) => {
                  if (key.includes("Ingredient") && product[key]) {
                    return (
                      <tr key={key}>
                        <td>{product[key]}</td>
                        <td>{product[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* start-Youtube*/}
        {product.strYoutube ? (
          <div className="product-recipe-youtube">
            <h2 className="product-name-video">Video recipe</h2>
            <iframe
              allowFullScreen
              src={`https://www.youtube.com/embed/${product.strYoutube.slice(
                -11
              )}`}
            ></iframe>
          </div>
        ) : null}
        {/* end-Youtube */}
      </div>
      {/*редактировать */}
      <p className="product-filter-category">
        <strong className="product-filter-strong">Category: </strong>
        {product.strCategory}
      </p>
      <p className="product-filter-meal">
        <strong className="product-filter-strong">Area: </strong>
        {product.strMeal}
      </p>

      <p>{product.strInstructions}</p>
    </div>
  );
}
