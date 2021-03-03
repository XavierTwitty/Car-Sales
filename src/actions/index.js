export const ADD_FEATURE = "ADD_FEATURE";
export const CLEAR_FEATURE = "CLEAR_FEATURE";

export const addFeature = (feature) => {
  return { type: ADD_FEATURE, payload: feature };
};

export const clearFeature = (feature) => {
  return { type: CLEAR_FEATURE, payload: feature };
};
