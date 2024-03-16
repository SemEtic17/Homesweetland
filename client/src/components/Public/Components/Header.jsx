//* This is the header part of home page it contains the navbar and the container of sliding image
import React from 'react'

export default function Header() {
  return (
    <header>
        {/* this is the navbar*/}
        <nav
          className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
          style={{ zIndex: "2000", height: "70px", marginTop: "-11px" }}
        >
          <div className="container-fluid">
            <div className="navbar-brand nav-link">
              <strong style={{ cursor: "default" }}>
                <img
                  src={require("./img/Logo.png")}
                  height="50"
                  width="50"
                  alt="MDB Logo"
                  loading="lazy"
                />
                HSL
              </strong>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#contacts" rel="noreferrer">
                    Contact private tutors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#activities">
                    HSL Activities
                  </a>
                </li>
              </ul>
              {/* Links of navbar */}
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.youtube.com/homesweetlandu"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/HomesweetlandU/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.tiktok.com/@homesweetland"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-tiktok" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/homesweetland_mulena/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://twitter.com/HomesweetlandU"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://t.me/homesweetland/773"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* This is the first container content wich is "start learning in our youtube channel" */}
        <div
          id="introCarousel"
          className="carousel slide carousel-fade shadow-2-strong"
          data-mdb-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-mdb-target="#introCarousel"
              data-mdb-slide-to="0"
              style={{ display: "block" }}
              className="active"
            ></li>
            <li
              data-mdb-target="#introCarousel"
              data-mdb-slide-to="1"
              style={{ display: "block" }}
            ></li>
            <li
              data-mdb-target="#introCarousel"
              data-mdb-slide-to="2"
              style={{ display: "block" }}
            ></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center">
                    <h1 className="mb-3">Welcome to Homesweetland</h1>
                    <h5 className="mb-4">School of languege</h5>
                    <a
                      className="btn btn-outline-light btn-lg m-2"
                      href="https://www.youtube.com/homesweetlandu"
                      role="button"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Start learning in our youtube channel
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* This is second container content "Land of wisdom" */}
            <div className="carousel-item">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                {/*//TODO: Place more important content on the "Land of wisdom"*/}
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center">
                    <h2>Land of wisdom</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* This is the third container content "Send email to HSL" */}
            <div className="carousel-item">
              <div
                className="mask"
                style={{
                  background:
                    "linear-gradient(\n45deg,\nrgba(29, 236, 197, 0.7),\nrgba(91, 14, 214, 0.7) 100%\n)",
                }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center">
                    <h2>Send email to Homesweetland</h2>
                    <a
                      className="btn btn-outline-light btn-lg m-2"
                      href="mailto:homesweetlandu@gmail.com"
                      target="_blank"
                      role="button"
                      rel="noreferrer"
                    >
                      Send email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#introCarousel"
            role="button"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#introCarousel"
            role="button"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
  )
}
