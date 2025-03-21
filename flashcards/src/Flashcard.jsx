import React from "react";
import "./Flashcard.css";

function Flashcard({ card, flipped, setFlipped }) {
  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className="front">
          <p>{card.question}</p>
        </div>
        <div className="back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
