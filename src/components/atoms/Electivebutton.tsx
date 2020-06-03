import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ElectiveButton = ({
  onClick,
}: {
  onClick?: (fn: React.MouseEvent) => void;
}) => {
  return (
    <button className="button is-info" onClick={onClick}>
      <span>Eletivas</span>
      <span className="icon">
        <FontAwesomeIcon icon={faChevronUp} />
      </span>
    </button>
  );
};
