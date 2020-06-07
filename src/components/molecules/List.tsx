import React from "react";
import { ListItem } from "../atoms/ListItem";

export const List = ({
  data,
  className,
}: {
  data: any[];
  className?: string;
}): JSX.Element => {
  const items = data.map((item, index) => (
    <ListItem key={index} item={item}></ListItem>
  ));

  return <ul className={className ? className : ""}>{items}</ul>;
};
