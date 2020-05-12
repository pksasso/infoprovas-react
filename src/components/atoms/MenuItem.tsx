import React from "react";
import { Link } from "react-router-dom";

export interface MenuItem {
  path: string;
  name: string;
}

export const MenuItem = ({ path, name }: MenuItem) => {
  return (
    <Link className="item-menu" to={path}>
      {name}
    </Link>
  );
};
