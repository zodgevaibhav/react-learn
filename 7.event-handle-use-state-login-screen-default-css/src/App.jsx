import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function login() {
    console.log(userName);
    console.log(password);
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          onChange={handleUserNameChange}
          placeholder="Enter user name"
        />

        <input
          type="password"
          onChange={handlePasswordChange}
          placeholder="Enter user password"
        />
        
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
