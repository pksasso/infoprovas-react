import React from "react";

export const ActionButton = ({
  onClick,
  title,
  type = "button",
}: {
  title: string;
  onClick?: (fn: any) => void;
  type?: "submit" | "button";
}) => {
  return (
    <button className="button is-primary" onClick={onClick} type={type}>
      {title}
    </button>
  );
};
