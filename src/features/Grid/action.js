export const addTile = (color) => {
  return {
    type: "ADD_TILE",
    created_at: Date.now(),
    color,
  };
};

export const removeTile = (id) => {
  return {
    type: "REMOVE_TILE",
    id,
  };
};
