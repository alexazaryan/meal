import Button from "../Button/Button";

// style.css
import "./RandomList.css";

export default function RandomList({ random }) {
  // console.log(random.strYoutube.slice(-11));
  return (
    <>
      <Button />

      <div className="wrap-box-random">
        <div className="wrap-random-lost-left">
          <div className="wrap-random">
            <div className="random-lost-img">
              <img className="random-img" src={random.strMealThumb} alt="#" />
            </div>

            <p className="random-category">
              <strong className="random-strong">Category: </strong>
              {random.strCategory}
            </p>

            <p className="random-meal">
              <strong className="random-strong">Area: </strong>
              {random.strMeal}
            </p>
          </div>
        </div>

        {/*recipe box start */}
        <div className="random-box-right">
          <div>
            <h1 className="random-title-ingredients">Recipe</h1>
            {/* table start*/}
            <table className="random-table">
              <thead>
                <tr className="random-table-td">
                  <td className="td">Ingredients</td>
                  <td className="td">Measure</td>
                </tr>
              </thead>

              {/* next */}
              <tbody className="random-tbody">
                {Object.keys(random).map((key) => {
                  if (key.includes("Ingredient") && random[key]) {
                    return (
                      <tr key={key}>
                        <td>{random[key]}</td>
                        <td>{random[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          {/*recipe box end */}

          {/* start-Youtube*/}

          {random.strYoutube ? (
            <div className="random-recipe-youtube">
              <h2 className="name-video">Video recipe</h2>
              <iframe
                allowFullScreen
                src={`https://www.youtube.com/embed/${random.strYoutube.slice(
                  -11
                )}`}
              ></iframe>
            </div>
          ) : null}
          {/* end-Youtube */}
        </div>
      </div>

      <div>
        <p>{random.strInstructions}</p>
      </div>
    </>
  );
}
