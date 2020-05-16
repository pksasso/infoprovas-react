import React from "react";
import "../../assets/scss/atoms/TextBox.scss";

export const TextBox = ({
  name,
  value,
  setText,
}: {
  name: string;
  value: string;
  setText: any;
}) => {
  const handleInputChange = (event: string) => {
    setText(event);
  };

  return (
    <label>
      {name}
      <input
        className="input-text"
        name={name}
        value={value}
        type="text"
        onChange={(event) => handleInputChange(event.target.value)}
      />
    </label>
  );
};
