import React from "react";
import "css/NavBarDB.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WidgetUser from "components/WidgetUser.js";
import logo from "img/pesos.png";
import InsertImage from "components/InsertImage";

function NavBar() { return (
  <div>
  <div class="sidebar">
    <a class="active" href="/Introduction">Introduction</a>
    <a href="/FrequentCharts">Frequent Charts</a>
    <a href="/IACharts">IA Charts</a>
    <a href="/ViewRawData">View Raw Data</a>
    <a href="/GenerateNewData">Generate New Data</a>
  </div>
  </div>
    );
}
export default NavBar;
