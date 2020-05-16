import React from "react";
import { Link } from "react-router-dom";

export interface MenuItem {
  path: string;
  name: string;
}

export const MenuItem = ({ path, name }: MenuItem) => {
  return (
    <Link className="navbar-item" to={path}>
      {name}
    </Link>
  );
};
