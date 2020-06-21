import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { SemestersTemplate } from "../templates/Semesters";

export const SemestersPage = ({ courseId = 1 }: { courseId?: number }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getSubjects = async () => {
      const { fetchSubjects } = InfoProvasService;

      try {
        setIsLoaded(true);
        const response = await fetchSubjects({ courseId });
        setItems(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    getSubjects();
  }, [courseId]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return <SemestersTemplate disciplines={items} />;
};
