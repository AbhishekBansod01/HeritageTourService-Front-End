
import React, { useRef } from "react"
import "./Login.css"
function Login() {
  const refUsername = useRef('');
  const refPassword = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = refUsername.current.value
    const password = refPassword.current.value
    const user = {
      userName: username, passWord: password
    }
    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaXRlc2giLCJleHAiOjE2NTM5MzQyOTMsImlhdCI6MTY1MzkxNjI5M30.lNo-ObrcOXROukrzYDkxIJw-gIG1ddYSlGsJQYzZYsAYtmXkdecv9ItWn0WetwwxDicJcCM3LcyppG1oLnj9zQ'
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8081/api/jwt/auth`, requestOptions)
        let data = await response.json();
        localStorage.setItem('token', data.jwtToken);
        console.log(localStorage.getItem('token'));
        alert("logged in successfully")
      } catch (err) {
        console.log(err);
        alert("invalid credentials");
      }
    }
    fetchApi()
  }

  return (
    <div className="divsd" data-testid="LoginTest"><center><br /><br />
      <h2>Login </h2><br />
      <form onSubmit={handleSubmit}  >
        <label htmlFor="username">Username: &nbsp;&nbsp; </label>
        <input type="text" id="username" name="username" ref={refUsername} autoComplete="off" placeholder="your user name" required />&nbsp;&nbsp;<br /><br />
        <label htmlFor="password">Password: &nbsp;&nbsp; </label>
        <input type="password" id="password" name="password" ref={refPassword} placeholder="your password" required/>&nbsp;&nbsp;<br /><br />
        <input type="submit" className="button3" value="                           login                           " />
      </form> <br /><br /><br /><br /><br /><br /><br /><br />
    </center>
    </div>
  );
}
export default Login;