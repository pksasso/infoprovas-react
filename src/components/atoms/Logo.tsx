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
    <figure
      className={className ? className : "image"}
      style={{ maxWidth: "320px", margin: "0 auto" }}
    >
      <img src={imageSource} alt={description ?? "Application logo"} />
    </figure>
  );
};
