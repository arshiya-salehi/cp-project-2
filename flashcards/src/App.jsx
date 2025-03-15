import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the largest planet?", answer: "Jupiter" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What year did the Titanic sink?", answer: "1912" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    resetInput();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    resetInput();
  };

  const handleSubmit = () => {
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase().trim();
    const userAnswer = userInput.toLowerCase().trim();
    setFeedback(userAnswer === correctAnswer ? "✅ Correct!" : "❌ Incorrect!");
  };

  const resetInput = () => {
    setUserInput("");
    setFeedback("");
  };

  return (
    <div className="app">
      <h1>Flashcard Quiz</h1>
      <p>Test your knowledge with these flashcards!</p>
      <Flashcard card={flashcards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your answer"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p className="feedback">{feedback}</p>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
