import "./components/Button";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import "./App.css";

function App() {
  function handleClickEvent(event) {
    console.log(event.target.textContent);
  }
  function onTextChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <TextBox placeholder="User name" onChange={onTextChange} />
        <TextBox
          placeholder="Password"
          type="password"
          onChange={onTextChange}
        />
        <Button variant="primary" onClick={handleClickEvent}>
          Login
        </Button>
        <Button variant="secondary" onClick={handleClickEvent}>
          Forgot Password
        </Button>
        <Button variant="danger" onClick={handleClickEvent}>
          Contact Support
        </Button>
      </div>
    </>
  );
}
export default App;
