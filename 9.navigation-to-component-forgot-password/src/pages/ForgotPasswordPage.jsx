import { useState } from "react";
import "../App.css";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleForGotPasswordButtonClick() {
    console.log(
      "Send forgot password email for " + userName + " and email " + email
    );
  }

  function handleBackToLoginButtonClick()
  {
    navigate("/login");
  }

  return (
    <div className="login-form">
      <h1>Forgot Password</h1>
      <TextBox placeholder="User name" onChange={handleUsernameChange}/>
      <TextBox placeholder="Email" onChange={handleEmailChange} />
      <Button variant="primary" onClick={handleForGotPasswordButtonClick}>
        Send Password Email
      </Button>
      <Button variant="secondary" onClick={handleBackToLoginButtonClick}>
        Back to Login
      </Button>
    </div>
  );
}

export default ForgotPassword;
