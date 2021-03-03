const initialState = {
  features: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        features: true,
      };
    case "CLEAR_FEATURE":
      return {
        ...state,
        features: false,
      };
  }
};
