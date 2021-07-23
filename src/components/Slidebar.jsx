import React, { Component } from "react";
import "../styles/carousel.css";
import SkeletonElement from "../skeletons/SkeletonElement";

class Slidebar extends Component {
  state = {
    loadingSlide1: true,
  };

  render() {
    return (
      <>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              {this.state.loadingSlide1 ? (
                <SkeletonElement type="carousel" />
              ) : null}

              <img
                src="Job1.jpg"
                className="d-block w-100"
                onLoad={() => this.setState({ loadingSlide1: false })}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Work and Life Balance</h3>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <button type="button" className="btn btn-dark">
                  ตำแหน่งที่เปิดรับสมัคร
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="Job2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3>Teamwork</h3>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
                <button type="button" className="btn btn-dark">
                  ตำแหน่งที่เปิดรับสมัคร
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="Job3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3>Third slide label</h3>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <button type="button" className="btn btn-dark">
                  ตำแหน่งที่เปิดรับสมัคร
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Slidebar;
