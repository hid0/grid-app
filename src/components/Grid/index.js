import React from "react";
import AddTileButton from "../AddTileButton";
import { useSelector, useDispatch } from "react-redux";
import Tile from "../Tile";

const colors = ["red", "blue", "pink", "yellow", "gray"];
export default function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();
  return (
    <>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={(_) =>
                dispatch({ type: "REMOVE_TILE", id: tile.id })
              }
            />
          );
        })}
      </div>
      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch({ type: "ADD_TILE", color })}
            />
          );
        })}
      </div>
    </>
  );
}
