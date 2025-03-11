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

  const showRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>Test your plant knowledge with these flashcards!</p>
      <p>Number of cards: {flashcards.length}</p>
      <Flashcard card={flashcards[currentIndex]} />
      <button onClick={showRandomCard}>Next Card</button>
    </div>
  );
}

export default App;
