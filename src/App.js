import React, { useState } from "react";
import "./App.css";
import { characters, questions } from "./data/quizData";
import StartScreen from "./components/StartScreen";
import QuestionStack from "./components/QuestionStack";
import ProgressBar from "./components/ProgressBar";
import ResultScreen from "./components/ResultScreen";

// screen: "start" | "quiz" | "result"
export default function App() {
  const [screen, setScreen] = useState("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [tally, setTally] = useState(() => characters.map(() => 0));

  const handleStart = () => {
    setQuestionIndex(0);
    setTally(characters.map(() => 0));
    setScreen("quiz");
  };

  const handleChoose = (characterIndex) => {
    setTally((prev) => {
      const next = [...prev];
      next[characterIndex] += 1;
      return next;
    });

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((i) => i + 1);
    } else {
      setScreen("result");
    }
  };

  const winner = () => {
    let bestIndex = 0;
    tally.forEach((count, i) => {
      if (count > tally[bestIndex]) bestIndex = i;
    });
    return characters[bestIndex];
  };

  return (
    <div className="app-shell">
      {screen === "start" && <StartScreen onStart={handleStart} />}

      {screen === "quiz" && (
        <div className="quiz-screen">
          <ProgressBar current={questionIndex} total={questions.length} />
          <QuestionStack
            key={questionIndex}
            question={questions[questionIndex]}
            onChoose={handleChoose}
          />
        </div>
      )}

      {screen === "result" && (
        <ResultScreen character={winner()} onRestart={handleStart} />
      )}
    </div>
  );
}
