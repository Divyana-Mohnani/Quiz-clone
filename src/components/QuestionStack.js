import React, { useRef, useState } from "react";
import "./QuestionStack.css";

const SWIPE_THRESHOLD = 110;

export default function QuestionStack({ question, onChoose }) {
  // `order` holds indices into question.options. order[0] is the card on
  // top. Swiping left sends the top card to the back of the line (pass);
  // swiping right locks it in as the answer.
  const [order, setOrder] = useState(() =>
    question.options.map((_, i) => i)
  );
  const [dragX, setDragX] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);

  const topIndex = order[0];

  const handlePointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;
    setDragX(e.clientX - startX.current);
  };

  const resolveSwipe = (direction) => {
    if (direction === "right") {
      onChoose(topIndex);
    } else if (direction === "left") {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
    }
    setDragX(0);
  };

  const handlePointerUp = () => {
    dragging.current = false;
    if (dragX > SWIPE_THRESHOLD) {
      resolveSwipe("right");
    } else if (dragX < -SWIPE_THRESHOLD) {
      resolveSwipe("left");
    } else {
      setDragX(0);
    }
  };

  const rotation = dragX / 18;
  const recruitOpacity = Math.min(Math.max(dragX / 120, 0), 1);
  const passOpacity = Math.min(Math.max(-dragX / 120, 0), 1);

  return (
    <div className="stack">
      <p className="stack__prompt">{question.prompt}</p>

      <div className="stack__cards">
        {order
          .slice(0, 3)
          .reverse()
          .map((optionIndex, i) => {
            const isTop = i === order.slice(0, 3).length - 1;
            const depth = order.slice(0, 3).length - 1 - i;
            return (
              <div
                key={optionIndex}
                className={`stack__card ${isTop ? "stack__card--top" : ""}`}
                style={
                  isTop
                    ? {
                        transform: `translateX(${dragX}px) rotate(${rotation}deg)`,
                      }
                    : {
                        transform: `translateY(${depth * 8}px) scale(${
                          1 - depth * 0.04
                        })`,
                      }
                }
                onPointerDown={isTop ? handlePointerDown : undefined}
                onPointerMove={isTop ? handlePointerMove : undefined}
                onPointerUp={isTop ? handlePointerUp : undefined}
              >
                {isTop && (
                  <>
                    <span
                      className="stack__badge stack__badge--recruit"
                      style={{ opacity: recruitOpacity }}
                    >
                      RECRUIT
                    </span>
                    <span
                      className="stack__badge stack__badge--pass"
                      style={{ opacity: passOpacity }}
                    >
                      PASS
                    </span>
                  </>
                )}
                <p className="stack__option-text">
                  {question.options[optionIndex]}
                </p>
              </div>
            );
          })}
      </div>

      <div className="stack__controls">
        <button
          className="stack__control stack__control--pass"
          onClick={() => resolveSwipe("left")}
        >
          ✕ Pass
        </button>
        <button
          className="stack__control stack__control--recruit"
          onClick={() => resolveSwipe("right")}
        >
          ✓ Recruit
        </button>
      </div>
    </div>
  );
}
