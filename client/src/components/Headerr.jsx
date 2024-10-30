//* This is the header part of home page it contains the navbar and the container of sliding image
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, Dropdown } from "flowbite-react";
import { signoutSuccess } from "../redux/user/userSlice";
import { toggleTheme } from "../redux/theme/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Homesweetland",
      subtitle: "School of language",
      content: (
        <a
          className="btn btn-outline-light btn-lg m-2"
          href="https://www.youtube.com/homesweetlandu"
          role="button"
          rel="noreferrer"
          target="_blank"
          style={{ color: "black" }}
        >
          <span className="d-none d-md-inline">
            Start learning in our youtube channel
          </span>
          <span className="d-md-none">Learn in YouTube</span>
        </a>
      ),
      maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
    },
    {
      title: "",
      content: <h2>Land of wisdom</h2>,
      maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
    },
    {
      title: "Send email to Homesweetland",
      content: (
        <a
          className="btn btn-outline-light btn-lg m-2"
          href="mailto:homesweetlandu@gmail.com"
          target="_blank"
          role="button"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          Send email
        </a>
      ),
      maskStyle: {
        background:
          "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
      },
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      {/* this is the navbar*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
        style={{ zIndex: "2000", height: "70px", marginTop: "-11px" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand nav-link">
            <strong style={{ cursor: "default", display: "flex" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/hsl-videos.appspot.com/o/Images%2FLogo.png?alt=media&token=8b068f7a-ae67-4baf-aa4e-502f59e4ff66"
                height="50"
                width="50"
                alt="MDB Logo"
                loading="lazy"
              />
              <span style={{ marginTop: "7px" }}>HSL</span>
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

          <div className="navbar-collapse" id="navbarSupportedContent">
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
              <li className="mr-2">
                <Button
                  className="w-12 h-10 sm:inline"
                  color="gray"
                  pill
                  onClick={() => dispatch(toggleTheme())}
                >
                  {theme === "light" ? <FaSun /> : <FaMoon />}
                </Button>
              </li>
              <li className="nav-item me-3 me-lg-0">
                {currentUser ? (
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt="user"
                        img={currentUser.profilePicture}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        @{currentUser.username}
                      </span>
                      <span className="block text-sm font-medium truncate">
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link to="/dashbord">Ckeck assighnments</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <a href={"/dashboard?tab=profile"}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </a>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignout}>
                      <Link to="/">Sign Out</Link>
                    </Dropdown.Item>
                  </Dropdown>
                ) : (
                  <a href="#sign">
                    <Button gradientDuoTone="purpleToBlue" outline>
                      Sign Up
                    </Button>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* This is Navbar that will only display on mobile scale */}
      <div className="flex max-w-fit justify-between fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 px-2 items-center space-x-4 md:relative sm:hidden">
        <div className="flex flex-row gap-4 my-1 mx-2">
          <Link
            to={"/"}
            className="relative dark:text-neutral-50 items-center flex text-black dark:hover:text-neutral-300"
          >
            <span className="text-sm">Home</span>
          </Link>
          <a
            className="relative dark:text-neutral-50 items-center flex text-black dark:hover:text-neutral-300"
            href="#contacts"
            rel="noreferrer"
          >
            <span className="text-sm">Contact tutors</span>
          </a>
          <a
            className="relative dark:text-neutral-50 items-center flex text-black dark:hover:text-neutral-300"
            href="#activities"
            rel="noreferrer"
          >
            <span className="text-sm">Our activities</span>
          </a>
        </div>
        <div className="flex flex-row gap-2 my-1 mx-2">
          <Button
            className="w-12 h-10 sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header className="backdrop-blur-none">
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/dashbord">Ckeck assighnments</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <a href={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </a>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>
                <Link to="/">Sign Out</Link>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <a href="#sign">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                <span>Login</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
            </a>
          )}
        </div>
      </div>

      {/* This is the first container content which is "start learning in our youtube channel" */}
      <div id="introCarousel" className="carousel slide">
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              data-mdb-target="#introCarousel"
              data-mdb-slide-to={index}
              className={
                currentSlide === index ? "active fade duration-700" : ""
              }
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <div className="mask" style={slide.maskStyle}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white text-center text-2xl font-bold">
                    <h1>{slide.title}</h1>
                    {slide.subtitle && <h5>{slide.subtitle}</h5>}
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-mdb-slide="prev"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-mdb-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
