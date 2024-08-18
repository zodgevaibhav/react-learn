import "./components/Button";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import "./App.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  const[userName, setUserName] = useState('')

  function handleClickEvent(event) {
    console.log(event.target.textContent);
  }

  function handleForgotPasswordClick(event) {
    console.log(event.target.textContent);
    navigate("/forgot-password"); // Navigates to the ForgotPasswordPage
  }

  function onUserNameChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <TextBox 
      placeholder="User name"
      value={userName}
      onChange={onUserNameChange}
       />
      <TextBox
        placeholder="Password"
        type="password"
      />
      <Button variant="primary" onClick={handleClickEvent}>
        Login
      </Button>
      <Button variant="secondary" onClick={handleForgotPasswordClick}>
        Forgot Password
      </Button>
      <Button variant="danger" onClick={handleClickEvent}>
        Contact Support
      </Button>
    </div>
  );
}

export default App;
