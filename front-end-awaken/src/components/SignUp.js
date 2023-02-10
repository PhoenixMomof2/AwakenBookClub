import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { redirect } from "react-router-dom";
import Header from "../components/Header";
import Body from "../components/Body";
import { headers } from "../components/Globals";

const SignUp = () => {
  console.log("I'm in the SignUp Component");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [age, setAge] = useState("");
  const { signup, setErrors } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers,
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        age,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          console.log(user)
          signup(user);
          redirect("/me");
        } else {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          setAge("");
          const errorLis = user.errors.map((e) => <li>{e}</li>);
          setErrors(errorLis);
        }
      });
      //clear form
      setUsername("");
      setPassword("");
      setPasswordConfirmation("");
      setAge("");
  };

  return (
    <div className="container mx-auto mt-3 px-5 bg-warning">
      <Header />
      <div className="row d-block">
        <form className="form mx-auto text-center bg-light border-dark p-2 m-5" onSubmit={handleSubmit}>
          <div className="col d-grid gap-3">
            <div className="p-2 bg-light border">
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
            <div className="p-2 bg-light border">
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
          <div className="col d-grid gap-3">
            <div className="p-2 bg-light border">
              <input
                type="text"
                className="form-control"
                placeholder="Password Confirmation"
                aria-label="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>
          <div className="col d-grid gap-3">
            <div className="p-2 bg-light border">
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                aria-label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary fw-bold">
            Submit
          </button>
        </form>
      </div>
      <Body />
    </div>
  );
};

export default SignUp;
