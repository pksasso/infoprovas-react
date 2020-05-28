import React from "react";

export const ActionButton = ({
  onClick,
  title,
}: {
  title: string;
  onClick?: (fn: any) => void;
}) => {
  return (
    <button className="button is-primary" onClick={onClick}>
      {title}
    </button>
  );
};
