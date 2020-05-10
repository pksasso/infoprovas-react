import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Logo } from "../components/atoms/Logo";
import { Navigator } from "./Navigator";
import { Pages } from "./Switch";

export default function App() {
  return (
    <Router>
      <Navigator />
      <Logo imageSource={logo} />
      <hr />
      <Pages />
    </Router>
  );
}
