import React from "react";

export const Logo = ({
  imageSource,
  classname,
  description,
}: {
  imageSource: string;
  classname?: any;
  description?: string;
}) => {
  return (
    <img
      src={imageSource}
      className={{ ...classname }}
      alt={description ?? "Application logo"}
    />
  );
};
