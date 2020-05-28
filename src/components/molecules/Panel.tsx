import React from "react";

export const Panel = ({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}) => {
  return (
    <div className="panel">
      <header className="panel-heading has-background-primary has-text-white-ter">
        <p>{title}</p>
      </header>
      <section className="panel-block has-background-white">{content}</section>
    </div>
  );
};
