export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const favourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });
export const removeFavourite = (datas) => ({ type: REMOVE_FROM_FAVOURITE, payload: datas });
export const addFavourite = (datas) => ({
  type: ADD_TO_FAVOURITE,
  payload: datas,
});
