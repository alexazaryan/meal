import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../../context/context";
import { searchMealByName } from "../../../api";
import Products from "../../components/Products/Products";
import Button from "../../components/Button/Button";

// style.css
import "./SearchComponent.css";

export default function SearchComponent() {
  const { setSearchMealByName } = useContext(FoodContext);

  // input lessen start
  const [value, setValue] = useState("");
  // Обновляем состояние значения ввода
  const searchComponentInputChange = (e) => setValue(e.target.value);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmitFormSearch();
    }
  };

  useEffect(() => {
    handleSubmitFormSearch();
  }, []);

  const handleSubmitFormSearch = async () => {
    try {
      // lessen
      const dataFetch = await searchMealByName(value);
      setSearchMealByName(dataFetch?.meals ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search2-SearchComponent-wrap">
      <div className="search2-btn-reverse">
        <Button />
      </div>

      <div className="search2-wrap">
        <div className="search2-wrap-search">
          <input
            onKeyDown={handleKey}
            placeholder=" Search"
            className="search2-input"
            value={value}
            type="text"
            onChange={searchComponentInputChange}
          />
          <button
            className="search2-btn"
            onClick={() => handleSubmitFormSearch()}
          >
            Enter
          </button>
        </div>
      </div>
      <Products />
    </div>
  );
}
