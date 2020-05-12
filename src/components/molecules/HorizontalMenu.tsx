import React from "react";
import { MenuItem } from "../atoms/MenuItem";

export const HorizontalMenu = ({ items }: { items: MenuItem[] }) => {
  const horizontalMenuItems = items.map((item) => (
    <MenuItem path={item.path} name={item.name}></MenuItem>
  ));

  return <nav className="container-menu">{horizontalMenuItems}</nav>;
};
