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
  disciplines: Disciplines[];
}) => {
  const panels: JSX.Element[] = [];

  const elective = disciplines.filter((item) => item.semester === 0);
  const mandatory = disciplines.filter((item) => item.semester !== 0);

  const disciplinesPerPeriod = _.groupBy(mandatory, "semester");

  _.forEach(disciplinesPerPeriod, (value, key) => {
    const ordered = _.sortBy(value, ["name"], ["asc"]);
    const links = ordered.map((item) => {
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

  const orderElectives = _.sortBy(elective, ["name"], ["asc"]);
  const electivesLink = orderElectives?.map((item) => {
    return (
      <Link key={item.code} to={createLink(item.id)}>
        {item.name}
      </Link>
    );
  });

  panels.push(
    <div className="column is-4">
      <Panel title={`Eletivas`} content={<List data={electivesLink} />} />
    </div>
  );

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-centered">{panels}</div>
    </div>
  );
};
