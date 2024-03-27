import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../api";
import CategoryList from "../../components/CategoryList/CategoryList";
import Preloader from "../../components/Preloader/Preloader";

import SearchCategories from "../../components/Search/Search";

// style.css
import "./Home.css";

export default function Home() {
  //

  // Array object
  const [catalog, cetCatalog] = useState([]);
  // console.log(getAllCategories);

  //Filter click home work
  const [filterCatalog, setFilterCatalog] = useState([]);

  // search
  const { pathname, search } = useLocation();

  // меняет иформацию url
  const push = useNavigate();

  // loading product
  const [loading, setLoading] = useState(true);

  // search url
  const searchValue = (str) => {
    setFilterCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase());
      })
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllCategories();

        // ?? оператор нулевого слияние
        cetCatalog(data?.categories ?? []);
        setFilterCatalog(
          search
            ? // search=beef
              data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase())
              )
            : data?.categories ?? []
        );
        // Preloader
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [search]);
  return (
    <div>
      <SearchCategories searchValue={searchValue} />
      {/* product download */}
      {loading ? <Preloader /> : <CategoryList catalog={filterCatalog} />}
    </div>
  );
}
