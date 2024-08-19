import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { loginUser } from "../services/LoginService";

import './LoginPage.css'

function LoginPage() {
  const navigate = useNavigate();

  const[userName, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const [loginError, setLoginError]=useState()


  async function handleLoginButtonClick(event){
    event.preventDefault();

    try{
      const data = await loginUser(userName, password);
      console.log("Login success "+ data.responseCode);
      navigate("/home");
    }catch(error){
      console.error(error);
      setLoginError("Unable to login, check username and password")
    }
  }

  function handleClickEvent(event) {
    console.log(event.target.textContent);
  }

  function handleForgotPasswordClick(event) {
    console.log(event.target.textContent);
    navigate("/forgot-password",{state:{userNameFromLoginScreen:userName}}); // Navigates to the ForgotPasswordPage
  }

  function onUserNameChange(event) {
    setUserName(event.target.value);
  }
  function onPasswordChange(event) {
    setPassword(event.target.value);
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
        value={password}
        onChange={onPasswordChange}
      />
      <Button variant="primary" onClick={handleLoginButtonClick}>
        Login
      </Button>
      <Button variant="secondary" onClick={handleForgotPasswordClick}>
        Forgot Password
      </Button>
      <Button variant="danger" onClick={handleClickEvent}>
        Contact Support
      </Button>
      
      {loginError && <div className="error-message">{loginError}</div>}
      
    </div>
  );
}

export default LoginPage;
