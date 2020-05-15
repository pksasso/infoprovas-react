import React from "react";
import "../../assets/scss/molecules/HorizontalMenu.scss";
import { MenuItem } from "../atoms/MenuItem";

export const HorizontalMenu = ({ items }: { items: MenuItem[] }) => {
  const horizontalMenuItems = items.map((item, index) => (
    <MenuItem key={index} path={item.path} name={item.name}></MenuItem>
  ));

  return (
    <nav className="horizontal-menu-items-container">{horizontalMenuItems}</nav>
  );
};
