import { useState, useEffect } from "react";
import { poemProps } from "../interfaces/inPoemProps";
import axios from "axios";

export const usePoemas = () => {
  const [poemas, setPoemas] = useState<poemProps[]>([]);
  // const url = 'http://localhost/BackEndconPHP/carga-datos/mostrar-api.php';
  const url = "http://localhost:3001/poemas";
  useEffect(() => {
    cargarPoemas();
  });

  const cargarPoemas = () => {
    axios
      .get(url)
      .then((response) => {
        setPoemas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Data: ", error);
      });
  };

  return {
    poemas,
  };
};
