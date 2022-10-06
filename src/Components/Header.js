import React from "react";
import "../Styles/Header.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="{pkb}" src="" />
        {/* Avatar for logged user */}
        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search" />
        {/* search icon */}
        {/* input */}
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
        {/* help icon */}
      </div>
    </div>
  );
}

export default Header;
