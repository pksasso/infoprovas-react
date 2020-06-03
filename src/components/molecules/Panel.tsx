import React from "react";

export const Panel = ({
  title,
  content,
}: {
  title?: string;
  content: JSX.Element;
}) => {
  const header = (
    <header className="panel-heading has-background-primary has-text-white-ter has-text-centered is-size-5">
      <p>{title}</p>
    </header>
  );

  return (
    <div className="panel">
      {title ? header : <div></div>}
      <section className="panel-block has-background-white">{content}</section>
    </div>
  );
};
