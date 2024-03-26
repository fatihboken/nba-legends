import React from "react";
import "./card.css";
import PlayerCard from "./PlayerCard";
import data from "../helper/data";

const CardContainer = ({search}) => {
  
  return (
    <div className="container">
      
      {data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase().trim())).map((player,i) => (
        <PlayerCard index={i} key={player.name} {...player} />
      ))}
    </div>
  );
};

export default CardContainer;
