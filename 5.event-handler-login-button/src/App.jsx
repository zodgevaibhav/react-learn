function App() {

  function loginUser() {
    console.log("Login button clicked.");
  }

  function loginAsFunction() {
    console.log("Login as function called.");
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />
      <button onClick={loginUser}>Login</button>
      <button onClick={loginAsFunction()}>Login as function</button>
      <button onClick={() => loginUser()}>Login as reference: Arrow function </button>
    </div>
  );
}

export default App;
