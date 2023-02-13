import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { redirect } from "react-router-dom";
import { headers } from "../components/Globals";
import Body from "../components/Body";
import Welcome from "../components/Welcome";

const Login = () => {
  // console.log("I'm in the Login Component");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    fetch("/login", {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(user => login(user));
        redirect("/books");
      } else {
        res.json().then(() => setError(error));
      }
    });
    // clear form
    setUsername("");
    setPassword("");
  }

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
      <div className="col-lg-6">
        <form className="form my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Username</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                aria-label="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Password</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
                aria-label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center text-light fw-bolder pb-3">
            <Welcome />Please log in to your account.
          </div>
          <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold">
            Login
          </button>
        </form>
      </div>
      </div>
      <Body />
    </div>
  );
};

export default Login;