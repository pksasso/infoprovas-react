import React from "react";

export const TemplatePage = ({ title }: { title: string }) => {
  return (
    <div className="page-content">
      <h1>{title}</h1>
    </div>
  );
};
