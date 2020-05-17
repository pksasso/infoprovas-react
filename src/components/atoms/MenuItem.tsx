import React from "react";
import { Link } from "react-router-dom";

export interface MenuItem {
  path: string;
  name: string;
}

export const MenuItem = ({ path, name }: MenuItem) => {
  return (
    <Link className="navbar-item is-size-4" to={path}>
      {name}
    </Link>
  );
};
