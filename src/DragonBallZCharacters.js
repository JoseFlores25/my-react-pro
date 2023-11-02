import React from "react";
import GokuImage from "./image/goku.jpg";
import VegetaImage from "./image/vegeta.jpg";
import PiccoloImage from "./image/piccolo.jpg";

const DragonBallZCharacters = () => {
  const imageSize = {
    width: "140px", // Set your desired width
    height: "140px", // Set your desired height
  };

  return (
    <div>
      <h2>Dragon Ball Z Characters</h2>
      <ul>
        <li>
          <img src={GokuImage} alt="Goku" style={imageSize} />
          Goku
        </li>
        <li>
          <img src={VegetaImage} alt="Vegeta" style={imageSize} />
          Vegeta
        </li>
        <li>
          <img src={PiccoloImage} alt="Piccolo" style={imageSize} />
          Piccolo
        </li>
        {/* Add more characters with images */}
      </ul>
    </div>
  );
};

export default DragonBallZCharacters;
