import React from "react";
import "../stylesheets/Poemario.css";
import { PoemCard } from "../components/PoemCard";

export const Poemario = () => {
  return (
    <>
      <div className="poemsContainer">
        <PoemCard />
      </div>
    </>
  );
};
