import React from "react";
import { Disciplines } from "../../models/Discipline";

export const DisciplinesTemplate = (disciplines: Disciplines[]) => {
  console.log(disciplines);

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-centered"></div>
    </div>
  );
};
