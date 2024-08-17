function Login() {
    function loginUser(userName, password) {
  
      console.log("Login button clicked. User Name :",userName);
      console.log("Login button clicked. Password :",password);
    }
  
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="User name" />
        <input type="password" placeholder="Password" />
        <button onClick={loginUser('vzodge','Test@123')}>Login</button>
      </div>
    );
  }
  
  export default Login;
  