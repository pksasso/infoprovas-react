import React from "react";

export const Logo = ({
  imageSource,
  className,
  description,
}: {
  imageSource: string;
  className?: string;
  description?: string;
}) => {
  return (
    <img
      className={className}
      src={imageSource}
      alt={description ?? "Application logo"}
    />
  );
};
