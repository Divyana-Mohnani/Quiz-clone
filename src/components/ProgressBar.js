import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ current, total }) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="progress">
      <span className="progress__label">
        FILE {current + 1} / {total}
      </span>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
