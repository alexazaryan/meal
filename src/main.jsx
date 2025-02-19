// routs
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
//
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import GoodItem from "./pages/GoodItem/GoodItem";
import Category from "./pages/Category/Category";
import Recipe from "./pages/Recipe/Recipe";
import Random from "./pages/Random/Random";
import SearchComponent from "./pages/SearchComponent/SearchComponent";
import FilterMeal from "./pages/FilterMeal/FilterMeal";

// style.css
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />, // <Header> & <Footer>
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/goodItem",
          element: <GoodItem />,
        },
        {
          path: "/categories/:name",
          element: <Category />,
        },
        {
          // главная страница
          path: "/meal/:id",
          element: <Recipe />,
        },
        {
          // кнопка рандомного выбора товаров
          path: "/random",
          element: <Random />,
        },

        // Поисковик
        {
          path: "/searchComponent",
          element: <SearchComponent />,
        },

        //FilterMeal
        {
          // кнопка рандомного выбора товаров
          path: "/filterMeal/:id",
          element: <FilterMeal />,
        },
      ],
    },
  ],
  {
    basename: "/meal",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
