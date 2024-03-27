import { API_URL } from "./config";

//  получим категроии всех блюд
const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// делим категории
const getFilterCategories = async (catName) => {
  const response = await fetch(API_URL + `filter.php?c=${catName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
//все
const getProductById = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// random
const getRandomProduct = async () => {
  const response = await fetch(API_URL + "random.php");
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// еда по название
const searchMealByName = async (mealProduct) => {
  const response = await fetch(API_URL + `search.php?s=${mealProduct}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// getProductBuId запрос
const getProductBuId = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

export {
  getAllCategories,
  getFilterCategories,
  getRandomProduct,
  getProductById,
  searchMealByName,
  getProductBuId,
};
