import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ButtonGroup = () => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);

  return (
    <div className="buttons is-centered">
      <Link
        onClick={() => {
          setActive(true);
          setActive2(false);
        }}
        className={
          active ? "button is-rounded is-primary" : "button is-rounded is-info"
        }
        to="/semestre"
      >
        Semestre
      </Link>
      <Link
        onClick={() => {
          setActive(false);
          setActive2(true);
        }}
        className={
          active2 ? "button is-rounded is-primary" : "button is-rounded is-info"
        }
        to="/professores"
      >
        Professor
      </Link>
    </div>
  );
};
