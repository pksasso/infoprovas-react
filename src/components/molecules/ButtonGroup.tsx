import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const ButtonGroup = () => {
  const [active, setActive] = useState(true);
  const [inactive, setInactive] = useState(false);

  const { pathname: currentPath } = useLocation();

  return (
    <div className="buttons is-centered">
      <Link
        onClick={() => {
          setActive(true);
          setInactive(false);
        }}
        className={
          active || currentPath === "/semestre"
            ? "button is-rounded is-primary"
            : "button is-rounded is-info"
        }
        to="/semestre"
      >
        Semestre
      </Link>
      <Link
        onClick={() => {
          setActive(false);
          setInactive(true);
        }}
        className={
          inactive || currentPath === "/professores"
            ? "button is-rounded is-primary"
            : "button is-rounded is-info"
        }
        to="/professores"
      >
        Professor
      </Link>
    </div>
  );
};
