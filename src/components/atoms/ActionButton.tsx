import React from "react";

export const ActionButton = ({
  className,
  onClick,
  title,
}: {
  className?: string;
  title: string;
  onClick?: (fn: any) => void;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
