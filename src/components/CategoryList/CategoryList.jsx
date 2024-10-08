import GoodsItem from "../../pages/GoodItem/GoodItem";

import "./CategoryList.css";

export default function CategoryList({ catalog }) {
  return (
    <div className="wrap__box__gi">
      {catalog.map((item) => {
        return <GoodsItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
}
