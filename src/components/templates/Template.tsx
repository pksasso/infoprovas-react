import React from "react";
import { Panel } from "../molecules/Panel";

export const TemplatePage = ({ title }: { title: string }) => {
  const items = [];

  for (let index = 0; index < 12; index++) {
    items.push(<Panel key={index} title={`${title}_${index + 1}`} />);
  }

  return <div className="page-content">{items}</div>;
};
