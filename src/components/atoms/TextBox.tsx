import React from "react";

export const TextBox = ({
  name,
  value,
  maxLength,
  setText,
}: {
  name: string;
  value: string;
  maxLength: number;
  setText: any;
}) => {
  const handleInputChange = (event: string) => {
    setText(event);
  };

  return (
    <div className="field">
      <label className="label">
        {name}
        <input
          className="input"
          maxLength={maxLength}
          name={name}
          value={value}
          type="text"
          onChange={(event) => handleInputChange(event.target.value)}
        />
      </label>
    </div>
  );
};
