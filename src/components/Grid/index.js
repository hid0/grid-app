import React from "react";
import AddTileButton from "../AddTileButton";
import { useSelector, useDispatch } from "react-redux";
import Tile from "../Tile";
import { addTile, removeTile } from "../../features/Grid/action";

const colors = ["red", "blue", "pink", "yellow", "gray"];
export default function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();

  return (
    <>
      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch(addTile(color))}
            />
          );
        })}
      </div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={(_) => dispatch(removeTile(tile.id))}
            />
          );
        })}
      </div>
    </>
  );
}
