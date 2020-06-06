import React from "react";

export const Panel = ({
  title,
  content,
  containerClass,
}: {
  title?: string;
  containerClass?: string;
  content: JSX.Element;
}) => {
  const header = (
    <header className="panel-heading has-background-primary has-text-white-ter has-text-centered is-size-5">
      <p>{title}</p>
    </header>
  );

  return (
    <div className="panel has-background-white" style={{ height: "100%" }}>
      {title ? header : <div></div>}
      <section className="panel-block has-background-white">{content}</section>
    </div>
  );
};
