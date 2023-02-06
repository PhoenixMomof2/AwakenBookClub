import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { redirect } from 'react-router-dom';

const SignUp = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [age, setAge] = useState("")
  const { signup, setErrors } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch('/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          age
        }),
      })
      .then(res => res.json())
      .then(user => {
        if(!user.errors){
          signup(user)
          redirect('/me')
        } else {
          setUsername("")
          setPassword("")
          setPasswordConfirmation("")
          setAge("")
          const errorLis = user.errors.map(e => <li>{e}</li>)
          setErrors(errorLis)
        }
      });
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Password Confirmation" aria-label="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Age" aria-label="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
  )
}

export default SignUp;