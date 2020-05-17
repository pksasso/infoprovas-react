import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";

export const DisciplinesPage = ({ title }: { title: string }) => {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await InfoProvasService.listCourses();
      setItems(response.data);
    };

    fetchData();
  }, []);

  console.log(items);
  return <h1>{title}</h1>;
};
