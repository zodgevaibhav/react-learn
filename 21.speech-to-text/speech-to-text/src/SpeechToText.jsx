import React, { useState, useRef, useEffect } from "react";

const SpeechToText = () => {
  const [listening, setListening] = useState(false);
  const [finalText, setFinalText] = useState(""); // confirmed transcript
  const [interimDisplay, setInterimDisplay] = useState(""); // throttled display
  const recognitionRef = useRef(null);
  const interimRef = useRef(""); // holds interim text without re-renders

  useEffect(() => {
    // throttled update for interim text
    const interval = setInterval(() => {
      setInterimDisplay(interimRef.current);
    }, 200); // update UI every 200ms
    return () => clearInterval(interval);
  }, []);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "mr-IN"; // Marathi

      recognition.onresult = (event) => {
        let interim = "";
        let final = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            final += transcript + " ";
          } else {
            interim += transcript;
          }
        }

        if (final) {
          setFinalText((prev) => prev + final);
        }

        // store interim in ref (does not trigger re-render)
        interimRef.current = interim;
      };

      recognition.onend = () => {
        if (listening) recognition.start(); // auto-restart if still listening
      };

      recognitionRef.current = recognition;
    }

    recognitionRef.current.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div>
      <h2>Speech to Text</h2>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop
      </button>

      <p>
        {finalText}
        <span style={{ color: "gray" }}>{interimDisplay}</span>
      </p>
    </div>
  );
};

export default SpeechToText;
