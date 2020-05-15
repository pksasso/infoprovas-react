import React from "react";

export const Panel = ({
  title,
  content,
}: {
  title: string;
  content?: JSX.Element;
}) => {
  return (
    <div className="panel">
      <header className="panel-header">
        <p>{title}</p>
      </header>
      <section className="panel-body">{content}</section>
    </div>
  );
};
