import React from "react";
import NarutoImage from "./image/naruto.jpg";
import SasukeImage from "./image/sasuke.jpg";
import SakuraImage from "./image/sakura.jpg";

const NarutoCharacters = () => {
  const imageSize = {
    width: "160px", // Set your desired width
    height: "160px", // Set your desired height
  };

  return (
    <div>
      <h2>Naruto Characters</h2>
      <ul>
        <li>
          <img src={NarutoImage} alt="Naruto" style={imageSize} />
          Naruto
        </li>
        <li>
          <img src={SasukeImage} alt="Sasuke" style={imageSize} />
          Sasuke
        </li>
        <li>
          <img src={SakuraImage} alt="Sakura" style={imageSize} />
          Sakura
        </li>
        {/* Add more characters with images */}
      </ul>
    </div>
  );
};

export default NarutoCharacters;
