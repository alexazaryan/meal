import { useContext } from "react";
import { FoodContext } from "../../../context/context";
import Product from "./Product";

export default function Products() {
  const { findProductBySearch } = useContext(FoodContext);
  return (
    <div>
      {findProductBySearch.map((item) => (
        <Product key={item.idMeal} {...item} />
      ))}
    </div>
  );
}
