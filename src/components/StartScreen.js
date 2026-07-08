import React from "react";
import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-screen__stamp">CONFIDENTIAL</div>
      <h1 className="start-screen__title">Which Crow Are You?</h1>
      <p className="start-screen__subtitle">
        Ketterdam Dossier Intake — seven questions, one verdict. Swipe right
        to answer, left to pass. No mourners, no funerals.
      </p>
      <button className="start-screen__button" onClick={onStart}>
        Open the File
      </button>
    </div>
  );
}
