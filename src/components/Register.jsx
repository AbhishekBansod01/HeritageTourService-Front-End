
import React, { useRef } from "react"
import "./Register.css"

function Register() {
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
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8081/api/jwt/reg`, requestOptions)
        let data = response.json();

        console.log(data)
        alert('Registered Successfully')

      } catch (err) {
        console.log(err)
        alert('error')
      }

    }
    fetchApi()

  }

  return (

    <div className="divsd" data-testid="RegisterTest"><center><br /><br />
      <h2>Register here</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="username">Username: &nbsp;&nbsp; </label>
        <input type="text" id="username" name="username" ref={refUsername} autoComplete="off" placeholder="your user name" maxLength={10} required/>&nbsp;&nbsp;<br /><br />
        <label htmlFor="password">Password: &nbsp;&nbsp; </label>
        <input type="password" id="password" name="password" ref={refPassword} placeholder="your password" maxLength={10} required/>&nbsp;&nbsp;<br /><br />
        <input type="submit" className="button3" value="                           submit                           " />
      </form> <br /><br /><br /><br /><br /><br /><br /><br />
    </center>
    </div>

  );
}

export default Register;




