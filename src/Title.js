import React from "react";

const Title = ({ text }) => {
  return (
    <h1 className="title">
      {text.split("").map((letter, index) => (
        <span key={index} className="title-letter">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Title;
