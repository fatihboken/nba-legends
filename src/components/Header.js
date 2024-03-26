import React from "react";
import img from "../img/nba-logo.png";
import "./card.css";


const Header = ({handleChange}) => {
  return (
    <div className="header">
      <img src={img} alt="" />
      <h1 className="title">
        {" "}
        <span>NBA</span> <span>Legends</span>{" "}
      </h1>
      <input onChange={handleChange} type="text" placeholder="Search Player.." />
    </div>
  );
};

export default Header;
