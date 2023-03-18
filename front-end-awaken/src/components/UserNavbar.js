import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Welcome from "../components/Welcome";

const UserNavbar = () => {
  const { logout, user } = useContext(UserContext)

  const logoutUser = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      logout()
    })
  }

  return (
    <nav className="navbar nav-pills navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-secondary" to="/home">
          <i className="bi bi-unity"></i> AWAKEN - Social Justice Book Club
        </Link>
        <Welcome />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end align-center me-4"
        id="main-nav"
      >
        <ul className="navbar-nav n">
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to="/books"
            >
              Book Club Book List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to="/me"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to={`/users/${user.id}/books`}
            >
              My Books
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to={`users/${user.id}/books/new`}
            >
              Add A New Book
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to={`users/${user.id}/comments/new`}
            >
              Add A New Comment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to={`/users/${user.id}/comments`}
            >
              My Comments
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link my-1 mx-1 active text-center text-dark fw-bolder"
              aria-current="page"
              to="/home"
              onClick={logoutUser}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UserNavbar;
