import React from "react";
import "./ResultScreen.css";

export default function ResultScreen({ character, onRestart }) {
  return (
    <div className="result-screen">
      <span className="result-screen__eyebrow">Verdict Reached</span>
      <div className="result-screen__stamp">{character.stamp}</div>
      <h2 className="result-screen__name">{character.name}</h2>
      <p className="result-screen__title">{character.title}</p>
      <p className="result-screen__blurb">{character.blurb}</p>
      <button className="result-screen__button" onClick={onRestart}>
        Run It Back
      </button>
    </div>
  );
}
