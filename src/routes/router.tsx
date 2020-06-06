import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { ButtonGroup } from "../components/molecules/ButtonGroup";
import { Header } from "../components/organisms/Header";
import { HORIZONTAL_NAVIGATION_MENU } from "../constants/menu";
import { Pages } from "./Switch";

export default function App() {
  return (
    <Router>
      <div>
        <Header items={HORIZONTAL_NAVIGATION_MENU} logo={logo} />
        <ButtonGroup />

        <Pages />
      </div>
    </Router>
  );
}
