import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { DisciplinesTemplate } from "../templates/Disciplines";

export const DisciplinesPage = ({ courseId = 1 }: { courseId?: number }) => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getSubjects = async () => {
      const { fetchSubjects } = InfoProvasService;

      setIsLoaded(true);
      const response = await fetchSubjects({ courseId });
      setItems(response.data);
      setIsLoaded(false);
    };

    getSubjects();
  }, [courseId]);

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return <DisciplinesTemplate disciplines={items} />;
};
