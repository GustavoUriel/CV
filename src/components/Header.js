import React from "react";
import "css/Header.css";
import NavBar from "components/NavBar.js";
// import WidgetUser from "components/WidgetUser.js";

export default function Header() {
  return (
    <div clasName="header-base">
      <div className="header-menu">
        <NavBar />
      </div>
    </div>
  );
}
