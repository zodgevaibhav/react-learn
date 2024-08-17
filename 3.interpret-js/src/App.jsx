function App() {
  // JS Object
  const welcome = {
    greetings: "Hey",
    title: "React",
  };

  // JS Function
  function getTitle(tempTitle) {
    return tempTitle;
  }

  return (
    <div>
      <h1>
        {welcome.greetings} {welcome.title}
      </h1>

      <h1>
        {welcome.greetings} {getTitle("Vaibhav")}
      </h1>
    </div>
  );
}

export default App;
