import GoodsItem from "../../pages/GoodItem/GoodItem";

export default function CategoryList({ catalog }) {
  return (
    <div>
      {catalog.map((item) => {
        return <GoodsItem key={item.idCategory} {...item} />;
      })}
    </div>
  );
}
