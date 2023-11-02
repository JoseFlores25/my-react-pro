// OnePieceCharacters.js
import React from "react";
import LuffyImage from "./image/luffy.jpg";
import ZoroImage from "./image/zoro.jpg";
import NamiImage from "./image/nami.jpg";

const OnePieceCharacters = () => {
  const imageSize = {
    width: "160px", // Set your desired width
    height: "160px", // Set your desired height
  };

  return (
    <div>
      <h2>One Piece Characters</h2>
      <ul>
        <li>
          <img src={LuffyImage} alt="Luffy" style={imageSize} />
          Luffy
        </li>
        <li>
          <img src={ZoroImage} alt="Zoro" style={imageSize} />
          Zoro
        </li>
        <li>
          <img src={NamiImage} alt="Nami" style={imageSize} />
          Nami
        </li>
        {/* Add more characters with images */}
      </ul>
    </div>
  );
};

export default OnePieceCharacters;
