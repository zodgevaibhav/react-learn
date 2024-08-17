import React, { useState } from "react";

function App() {
  // JS Object
  const [welcome, setWelcome] = useState({
    greetings: "Hey",
    title: "React",
  });

  function lowerTheGreetingTitle() {
    setWelcome((prevWelcome) => ({
      ...prevWelcome,
      title: prevWelcome.title.toLowerCase(),
    }));
  }

  function upperTheGreetingTitle() {
    setWelcome((prevWelcome) => ({
      ...prevWelcome,
      title: prevWelcome.title.toUpperCase(),
    }));
  }

  return (
    <div>
      <h1>
        {welcome.greetings} {welcome.title}
      </h1>
      <button onClick={lowerTheGreetingTitle}>Lower the title</button>

      <button onClick={upperTheGreetingTitle}>Upper the title</button>
    </div>
  );
}

export default App;
