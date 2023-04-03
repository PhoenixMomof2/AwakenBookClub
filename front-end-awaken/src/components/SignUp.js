import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { headers } from "../components/Globals";
import Welcome from "../components/Welcome";
import Body from "../components/Body";

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")
  const { signup, setErrors, errors } = useContext(UserContext)
  const navigate = useNavigate()

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
        bio,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/me");
        } else {
          const errorLis = user.errors.map((e, ind) => <li key={ind}>{e}</li>);
          setErrors(errorLis);
        }
      });
    //clear form
    // setUsername("");
    // setPassword("");
    // setPasswordConfirmation("");
    // setAge("");
    // setBio("")
  };

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex bg-danger">
      <div className="container-flex bg-danger row justify-content-center">
        <div className="container-flex col-lg-6">
          <form
            className="my-5 justify-content-center text-center bg-dark border-dark p-3"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning">Welcome, Please signup!</h4>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control text-center"
                  aria-label="Username"
                  placeholder="Enter Username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Enter Password</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Password Confirmation</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password Confirmation"
                  aria-label="password_confirmation"
                  id="password-confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Age</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Age"
                  aria-label="Age"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
          <div className="form-floating pb-3">       
          <span className="input-group-text">Enter bio in text area below...</span>           
            <textarea              
              className="form-control text-dark text-justify" 
              style={{height: '150px'}}
              id="comment-textarea"
              defaultValue={bio}
              onChange={(e) => setBio(e.target.value)}
            >
            </textarea>
          </div>
        </div>
            <div className="text-center text-light fw-bolder pb-3">
              <Welcome />
              Please sign up for an account.
            </div>
            <button
              type="submit"
              className="btn bg-warning p-2 btn-outline-primary fw-bold"
            >
              Sign Up
            </button>
            <div className="text-light">{errors}</div>
          </form>
        </div>
      </div>
      <Body />
    </div>
  );
};

export default SignUp;
