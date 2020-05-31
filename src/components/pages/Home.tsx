import React, { useState } from "react";
import { ProfessorsPage } from "./Professors";
import { SemestersPage } from "./Semesters";

export const HomePage = () => {
  const semesters = true;
  const professors = false;

  const [showPage, setShowPage] = useState(semesters);

  return (
    <div>
      <div className="columns is-12 is-centered">
        <button onClick={() => setShowPage(semesters)}>Semestre</button>
        <button onClick={() => setShowPage(professors)}>Professor</button>
      </div>
      {showPage ? <SemestersPage /> : <ProfessorsPage />}
    </div>
  );
};
