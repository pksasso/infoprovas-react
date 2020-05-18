import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Disciplines } from "../../models/Discipline";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

const createLink = (x: any) => {
  return `${x}`;
};

export const DisciplinesTemplate = ({
  disciplines,
}: {
  course?: number;
  disciplines?: Disciplines[];
}) => {
  const panels: JSX.Element[] = [];
  const disciplinesPerPeriod = _.groupBy(disciplines, "semester");

  _.forEach(disciplinesPerPeriod, (value, key) => {
    const links = value.map((item, index) => {
      return (
        <Link key={item.code} to={createLink(item.id)}>
          {item.name}
        </Link>
      );
    });
    panels.push(
      <div className="column is-3" key={key}>
        <Panel title={`${key}º Período`} content={<List data={links} />} />
      </div>
    );
  });

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-centered">{panels}</div>
    </div>
  );
};
