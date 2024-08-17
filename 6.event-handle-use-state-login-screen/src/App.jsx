import { useState } from "react";

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
    <div>
      <div>
        <input
          type="text"
          onChange={handleUserNameChange}
          placeholder="Enter user name"
        />
      </div>
      <div>
        <input
          type="password"
          onChange={handlePasswordChange}
          placeholder="Enter user password"
        />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
