import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { redirect } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {login} = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password
    }

    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
    if (res.ok){
      res.json().then((user) => login(user));
      redirect('/');
    } else {
      res.json().then(() => setError(error));
    }
  });
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={redirect('/me')}>Login</button>
      </form>
    </div>
  )
}

export default Login;