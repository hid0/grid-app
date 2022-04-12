import { ADD_TILE, REMOVE_TILE } from "./constants";

export const addTile = (color) => {
  return {
    type: ADD_TILE,
    created_at: Date.now(),
    color,
  };
};

export const removeTile = (id) => {
  return {
    type: REMOVE_TILE,
    id,
  };
};

export const addTileWithChecking = (color) => {
  return function (dispatch, getState) {
    if (getState().grid.length < 5) {
      dispatch(addTile(color));
    }
  };
};
