import React from "react";
import { ListItem } from "../atoms/ListItem";

export const List = ({ List }: { List: any[] }): JSX.Element => {
  const items = List.map((item, index) => (
    <ListItem key={index} item={item}></ListItem>
  ));

  return <ul>{items}</ul>;
};
