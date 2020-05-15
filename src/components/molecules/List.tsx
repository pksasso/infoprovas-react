import React from "react";
import { ListItem } from "../atoms/ListItem";

export const List = ({ data }: { data: any[] }): JSX.Element => {
  const items = data.map((item, index) => (
    <ListItem key={index} item={item}></ListItem>
  ));

  return <ul>{items}</ul>;
};
