import React, { useState } from "react";
import "./card.css";

const PlayerCard = ({ name, img, statistics }) => {
  const [show, setShow] = useState(true);
  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <div onClick={handleClick} className="player">
      {show ? (
        <img src={img} alt={name} />
      ) : (
        <ul className="list">
          {statistics.map((item, i) => (
            <li key={i}>🏀 {item}</li>
          ))}
        </ul>
      )}

      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default PlayerCard;
