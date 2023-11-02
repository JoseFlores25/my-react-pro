import React from "react";

const CharacterName = ({ name }) => {
  return (
    <div className="character-name">
      {name.split("").map((letter, index) => (
        <span key={index} className="character-name-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default CharacterName;
