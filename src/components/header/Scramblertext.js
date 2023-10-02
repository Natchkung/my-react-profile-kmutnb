import React, { useRef, useState, useEffect } from "react";

// load 'scrambling-text' module.
import Scrambler from "./Scrambler";

export default function App() {
  // define the text to be scrambled as state.
  const [text, setText] = useState([
    "Welcome to My WebSite ! !",
    "STUDENT FROM KMUTNB",
    "You can call me 'Nut'"
  ]);
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    shit();
    // call scramble function with the text to be scrambled and handler.
  }, []);

  let i = 0;
  function shit() {
    scramblerRef.current.scramble(text[i % text.length], setText);
    setTimeout(shit, 5000);
    i++;
  }

  return <span>{text}</span>;
}
