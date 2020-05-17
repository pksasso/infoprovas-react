import React from "react";

export const SendButton = ({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) => {
  return (
    <button className={className} onClick={onClick}>
      Enviar
    </button>
  );
};
