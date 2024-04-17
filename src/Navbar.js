import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import WorkIcon from "@mui/icons-material/Work";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LanguageIcon from "@mui/icons-material/Language";
// import "./Navbar.css";
import "./index.css";
function Navbar({ setCategory }) {
  const handleClick = (newCategory) => {
    setCategory(newCategory);
    console.log(newCategory);
  };

  return (
    <div id="Navbar" className="bg-black text-white p-4">
      <h1 style={{ color: "#B72727" }}>BB News</h1>
      <ul className="list-unstyled">
        <li onClick={() => handleClick("Top Stories")}>
          <HomeIcon /> Top Stories
        </li>
        <li onClick={() => handleClick("World")}>
          <LanguageIcon />
          Around the World
        </li>
        <li onClick={() => handleClick("Business")}>
          {" "}
          <WorkIcon /> Business
        </li>
        <li onClick={() => handleClick("Health")}>
          {" "}
          <LocalHospitalIcon /> Health
        </li>
        <li onClick={() => handleClick("Entertainment")}>
          <PlayCircleOutlineIcon />
          Entertainment
        </li>
        <li onClick={() => handleClick("Sports")}>
          {" "}
          <SportsSoccerIcon />
          Sports
        </li>
        <li onClick={() => handleClick("Discussion")}>
          <ChatBubbleIcon />
          Discussion
        </li>
      </ul>
    </div>
  );
}

export default Navbar;