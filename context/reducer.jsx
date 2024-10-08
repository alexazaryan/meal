export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_MEALS_BY_CATALOG": {
      return {};
    }

    case "OLD_CATALOG": {
      return {};
    }

    case "SEARCH_PRODUCT": {
      return {
        ...state,
        findProductBySearch: payload,
      };
    }

    default:
      return state;
  }
}
