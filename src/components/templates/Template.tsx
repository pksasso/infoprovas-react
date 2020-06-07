import React from "react";

export const TemplatePage = ({ title }: { title: string }) => {
  return (
    <div className="container is-fullhd">
      <div className="columns is-multiline is-centered">
        <div className="column">
          <div className="content">
            <h1 className="title has-text-centered has-text-grey">{title}</h1>
            <h2 className="subtitle has-text-centered has-text-grey">
              Em construção
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
