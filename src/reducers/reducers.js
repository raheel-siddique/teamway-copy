export const reducers = (state, action) => {
  switch (action.type) {
    case "GET_ITEM":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
