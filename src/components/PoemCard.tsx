import React from "react";
import { FaPenFancy } from "react-icons/fa6";
import "../stylesheets/PoemCard.css";
export const PoemCard = () => {
  return (
    <>
      <div className="card">
        <div className="header">
          <span className="icon">
            <FaPenFancy />
          </span>
          <p className="alert">New message!</p>
        </div>

        <p className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
          unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
        </p>

        <div className="actions">
          <a className="read" href="">
            Take a Look
          </a>
        </div>
      </div>
    </>
  );
};
