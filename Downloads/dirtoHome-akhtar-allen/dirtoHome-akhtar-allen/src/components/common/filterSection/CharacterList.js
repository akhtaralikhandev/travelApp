import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCharacter } from "../../../redux/filters/filterSlice";
import Character from "./Character";

const ALPHABETS = [
  "all",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function CharacterList() {
  const {character} = useSelector((state) => state.entities?.filter);
  const dispatch = useDispatch();

  const handleClick = (alphabet) => {
    dispatch(filterByCharacter(alphabet));
  };

  return (
    <div className="pagination-wrapper mt-4 text-center">
      <ul className="pagination-list mycustomlist">
        {ALPHABETS.map((alphabet) => (
          <Character
            key={alphabet}
            character={alphabet}
            activeFilter={character}
            handler={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
