import React from "react";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/provas">Enviar Prova</Link>
      <Link to="/ajuda">Ajuda</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
};
