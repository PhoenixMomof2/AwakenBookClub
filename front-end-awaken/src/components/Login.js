import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { redirect } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(user => login(user));
        redirect("/me");
      } else {
        res.json().then(() => setError(error));
      }
    });
  }

  return (
    <div className="container mx-auto mt-3 px-5 bg-warning">
      <Header />
      <div className="row d-block">
        <form className="form mx-auto text-center bg-light border-dark p-2 m-5" onSubmit={handleSubmit}>
          <div className="col d-grid gap-3">
            <div className="col p-3 bg-light border">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="col d-grid gap-3">
            <div className="col p-3 bg-light border">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary fw-bold">
            Login
          </button>
        </form>
      </div>
      <Body />
    </div>
  );
};

export default Login;
