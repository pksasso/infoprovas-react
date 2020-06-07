import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { ProfessorsTemplate } from "../templates/Professors";

export const ProfessorsPage = ({ courseId = 1 }: { courseId?: number }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getProfessor = async () => {
      const { fetchProfessorsByCourse } = InfoProvasService;

      try {
        setIsLoaded(true);
        const response = await fetchProfessorsByCourse({ courseId });
        setItems(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    getProfessor();
  }, [courseId]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return <ProfessorsTemplate professors={items} />;
};
