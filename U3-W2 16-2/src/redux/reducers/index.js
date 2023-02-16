const initialState = {
  prefe: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PREFE":
      return {
        ...state,
        prefe: {
          ...state.prefe,
          content: [...state.prefe.content, action.payload],
        },
      };

    case "REMOVE_PREFE":
      return {
        ...state,
        prefe: {
          ...state.prefe,
          content: state.prefe.content.filter((_, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
