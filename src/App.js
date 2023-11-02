// App.js
import React, { useState } from "react";
import Title from "./Title";
import CharacterName from "./CharacterName";
import OnePieceCharacters from "./OnePieceCharacters";
import NarutoCharacters from "./NarutoCharacters";
import DragonBallZCharacters from "./DragonBallZCharacters";
import "./App.css";

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleTitleClick = (anime) => {
    setSelectedAnime(anime);
  };

  const getImageForCharacter = (character) => {
    return "";
  };

  const animeTitle = "AnimeCharacters";
  const selectedCharacters = {
    OnePiece: "",
    Naruto: "",
    DragonBallZ: "",
  };

  return (
    <div className="center-container">
      <Title text={animeTitle} />
      <div className="title-container">
        <h2
          onClick={() => handleTitleClick("OnePiece")}
          className={selectedAnime === "OnePiece" ? "selected" : ""}
        >
          One Piece
        </h2>
        <h2
          onClick={() => handleTitleClick("Naruto")}
          className={selectedAnime === "Naruto" ? "selected" : ""}
        >
          Naruto
        </h2>
        <h2
          onClick={() => handleTitleClick("DragonBallZ")}
          className={selectedAnime === "DragonBallZ" ? "selected" : ""}
        >
          Dragon Ball Z
        </h2>
      </div>
      <div>
        {selectedAnime === "OnePiece" && (
          <>
            <CharacterName name={selectedCharacters.OnePiece} />
            <OnePieceCharacters getImageForCharacter={getImageForCharacter} />
          </>
        )}
        {selectedAnime === "Naruto" && (
          <>
            <CharacterName name={selectedCharacters.Naruto} />
            <NarutoCharacters getImageForCharacter={getImageForCharacter} />
          </>
        )}
        {selectedAnime === "DragonBallZ" && (
          <>
            <CharacterName name={selectedCharacters.DragonBallZ} />
            <DragonBallZCharacters
              getImageForCharacter={getImageForCharacter}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
