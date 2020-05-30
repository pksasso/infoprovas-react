import React from "react";

export const ElectiveButton = ({
  onClick,
}: {
  onClick?: (fn: any) => void;
}) => {
  return (
    <button className="button is-info " onClick={onClick}>
      <div>
        <span>Eletivas</span>
      </div>
    </button>
  );
};
