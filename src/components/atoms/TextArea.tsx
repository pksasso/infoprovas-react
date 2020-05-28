import React from "react";

export const TextArea = ({
  label,
  placeholder,
  maxLength,
  setMessage,
  value,
}: {
  label: string;
  placeholder: string;
  maxLength: number;
  setMessage: any;
  value: string;
}) => {
  const handleInputChange = (event: string) => {
    setMessage(event);
  };
  return (
    <div className="field ">
      <label className="label">
        {label}
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                maxLength={maxLength}
                className="textarea"
                placeholder={placeholder}
                value={value}
                onChange={(event) => handleInputChange(event.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};
