import React from "react";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

export const TemplatePage = ({ title }: { title: string }) => {
  const items = [];

  for (let index = 0; index < 8; index++) {
    items.push(
      <div className="column is-4">
        <Panel
          key={index}
          title={`${title}_${index + 1}`}
          content={<List data={["Ola", "Mundo"]} />}
        />
      </div>
    );
  }

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-centered">{items}</div>
    </div>
  );
};
