import React from "react";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

export const TemplatePage = ({ title }: { title: string }) => {
  const items = [];

  for (let index = 0; index < 8; index++) {
    items.push(
      <Panel
        key={index}
        title={`${title}_${index + 1}`}
        content={<List data={["Ola", "Mundo"]} />}
      />
    );
  }

  return <div className="page-content">{items}</div>;
};
