import React from "react";
import Body from "./Body";
import AwesomePeopleRead from "../images/AwesomePeopleRead.jpg";
import BooksSign from "../images/BooksSign.jpg";
import WomanReading from "../images/WomanReading.jpg";

const Home = () => {
  
  return (
    <section id="carousel">
      <div className="container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={WomanReading} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="text-light fw-bolder rounded-pill bg-danger">Become A Member</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={BooksSign} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="text-light fw-bolder rounded-pill bg-danger">Join The Movement</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={AwesomePeopleRead}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="text-light fw-bolder rounded-pill bg-danger">Be A Social Justice Ally</h4>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <Body />
      </div>
    </section>
  );
};

export default Home;
