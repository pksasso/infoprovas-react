import React from "react";
import { MenuItem } from "../atoms/MenuItem";

export const HorizontalMenu = ({ items }: { items: MenuItem[] }) => {
  const horizontalMenuItems = items.map((item, index) => (
    <MenuItem key={index} path={item.path} name={item.name}></MenuItem>
  ));

  return (
    <div className="horizontal-menu">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a
              href="#navbar-burger"
              id="navbar-burger"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => {
                document
                  ?.getElementById("navbar-burger")
                  ?.classList?.toggle("is-active");
                document
                  ?.getElementById("navbar-menu")
                  ?.classList?.toggle("is-active");
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbar-menu"
            className="navbar-menu"
            style={{ justifyContent: "center" }}
          >
            {horizontalMenuItems}
          </div>
        </div>
      </nav>
    </div>
  );
};
