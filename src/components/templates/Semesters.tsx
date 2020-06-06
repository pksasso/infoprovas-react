import _ from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Disciplines } from "../../models/Discipline";
import { ElectiveButton } from "../atoms/Electivebutton";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

const createLink = (disciplineId: any) => {
  return `materia/${disciplineId}`;
};

export const SemestersTemplate = ({
  disciplines,
}: {
  course?: number;
  disciplines: Disciplines[];
}) => {
  const [showElective, setShowElective] = useState(false);

  const mandatoryPanels: JSX.Element[] = [];
  const electivePanels: JSX.Element[] = [];

  const elective = disciplines.filter((item) => item.semester === 0);
  const mandatory = disciplines.filter((item) => item.semester !== 0);

  const disciplinesPerSemester = _.groupBy(mandatory, "semester");

  const changeElectiveValue = () => {
    setShowElective(!showElective);
  };

  _.forEach(disciplinesPerSemester, (value, key) => {
    const ordered = _.sortBy(value, ["name"], ["asc"]);
    const links = ordered.map((item) => {
      return (
        <Link key={item.code} to={createLink(item.id)}>
          {item.name}
        </Link>
      );
    });
    mandatoryPanels.push(
      <div className="column is-4" key={key}>
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

  electivePanels.push(
    <div className="column" key="electives">
      <Panel title={`Eletivas`} content={<List data={electivesLink} />} />
    </div>
  );

  const mandatoryBlock = (
    <div>
      <div className="container is-fullhd">
        <div className="columns is-multiline is-centered is-fullhd">
          {mandatoryPanels}
        </div>
      </div>
      <div className="columns is-12 is-centered ">
        <ElectiveButton onClick={changeElectiveValue} />
      </div>
    </div>
  );

  const electiveBlock = (
    <div>
      <div className="columns  is-12 is-centered ">
        <ElectiveButton onClick={changeElectiveValue} />
      </div>
      <div className="container is-fullhd">
        <div className="columns is-multiline is-centered is-fullhd">
          {electivePanels}
        </div>
      </div>
    </div>
  );

  return <div>{showElective ? electiveBlock : mandatoryBlock}</div>;
};
