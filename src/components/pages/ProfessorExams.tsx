import React, { useEffect, useState } from "react";
import { Professor } from "../../models/Professor";
import InfoProvasService from "../../services/app";
import { ProfessorExamsTemplate } from "../templates/ProfessorExams";

export const ProfessorExamsPage = ({
  courseId = 1,
  professorId,
}: {
  courseId?: number;
  professorId: number;
}) => {
  const [items, setItems] = useState([]);
  const [professor, setProfessor] = useState<Professor | undefined>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getProfessorExams = async () => {
      const { fetchExamsByProfessor } = InfoProvasService;

      try {
        setIsLoaded(true);
        const response = await fetchExamsByProfessor({ courseId, professorId });
        setItems(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    const getProfessorData = async () => {
      const { getProfessorDetailsByCourse } = InfoProvasService;
      try {
        const response = await getProfessorDetailsByCourse({
          courseId,
          professorId,
        });
        setProfessor(response.data);
      } catch (err) {}
    };

    getProfessorExams();
    getProfessorData();
  }, [courseId, professorId]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return <ProfessorExamsTemplate exams={items} professor={professor} />;
};
