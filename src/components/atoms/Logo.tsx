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
    <figure className={className}>
      <img src={imageSource} alt={description ?? "Application logo"} />
    </figure>
  );
};
