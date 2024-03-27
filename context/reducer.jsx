export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_MEALS_BY_CATALOG": {
      return {};
    }

    // lessen delete start
    case "OLD_CATALOG": {
      return {};
    }
    // lessen delete end

    // lessen delete start
    case "SEARCH_PRODUCT": {
      return {
        ...state,
        findProductBySearch: payload,
      };
    }
    // lessen delete end

    default:
      return state;
  }
}
