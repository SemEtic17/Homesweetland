import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2'>
      <div
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Homesweetland
        </span>
        <span className="text-white text-xl">---</span>Assignments
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link to='/'>Homepage</Link>
              </Dropdown.Item>
            <Dropdown.Divider />
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/dashbord'} as={'div'}>
          <Link to='/dashbord'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}















//* This is the header part of home page it contains the navbar and the container of sliding image
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
// import { Footer } from 'flowbite-react';
// import '../../css/mdb.min.css' //* importing this will afect yourtailwind css
// import { useSelector, useDispatch } from 'react-redux';
// import { Avatar, Button, Dropdown } from 'flowbite-react';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const { theme } = useSelector((state) => state.theme);
//   const handleSignout = async () => {
//     try {
//       const res = await fetch('/api/user/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };


//     const [currentSlide, setCurrentSlide] = useState(0);
  
//     const slides = [
//       {
//         title: 'Welcome to Homesweetland',
//         subtitle: 'School of language',
//         content: (
//           <a
//             className="btn btn-outline-dark btn-lg m-2"
//             href="https://www.youtube.com/homesweetlandu"
//             role="button"
//             rel="noreferrer"
//             target="_blank"
//             style={{ color: 'black' }}
//           >
//             Start learning in our youtube channel
//           </a>
//         ),
//         maskStyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
//       },
//       {
//         title: '',
//         content: (<h2>Land of wisdom</h2>),
//         maskStyle: { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
//       },
//       {
//         title: 'Send email to Homesweetland',
//         content: (
//           <a
//             className="btn btn-outline-dark btn-lg m-2"
//             href="mailto:homesweetlandu@gmail.com"
//             target="_blank"
//             role="button"
//             rel="noreferrer"
//             style={{ color: 'black' }}
//           >
//             Send email
//           </a>
//         ),
//         maskStyle: {
//           background:
//             'linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)',
//         },
//       },
//     ];
  
//     const handleNext = () => {
//       setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//     };
  
//     const handlePrev = () => {
//       setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
//     };

//   return (
//     <div>
//       {/* this is the navbar*/}
//       <nav
//         className='navbar navbar-expand-lg navbar-dark d-none d-lg-block'
//         style={{ zIndex: "2000", height: "70px", marginTop: "-11px" }}
//       >
//         <div className="container-fluid">
//           <div className="navbar-brand nav-link">
//             <strong style={{ cursor: "default", display: 'flex' }}>
//               <img
//                 src='https://firebasestorage.googleapis.com/v0/b/hsl-videos.appspot.com/o/Images%2FLogo.png?alt=media&token=8b068f7a-ae67-4baf-aa4e-502f59e4ff66'
//                 height="50"
//                 width="50"
//                 alt="MDB Logo"
//                 loading="lazy"
//               />
//               <span style={{ marginTop: "7px" }}>HSL</span>
//             </strong>
//           </div>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars" />
//           </button>

//           <div
//             className="navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#contacts" rel="noreferrer">
//                   Contact private tutors
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#activities">
//                   HSL Activities
//                 </a>
//               </li>
//             </ul>

//             {/* Links of navbar */}
//             <ul className="navbar-nav d-flex flex-row">
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://www.youtube.com/homesweetlandu"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-youtube" />
//                 </a>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://www.facebook.com/HomesweetlandU/"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-facebook-f" />
//                 </a>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://www.tiktok.com/@homesweetland"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-tiktok" />
//                 </a>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://www.instagram.com/homesweetland_mulena/"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram" />
//                 </a>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://twitter.com/HomesweetlandU"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-twitter" />
//                 </a>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 <a
//                   className="nav-link"
//                   href="https://t.me/homesweetland/773"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-telegram" />
//                 </a>
//               </li>
//               <li className='mr-2'>
//                 <Button
//                   className='w-12 h-10 sm:inline'
//                   color='gray'
//                   pill
//                   onClick={() => dispatch(toggleTheme())}
//                 >
//                   {theme === 'light' ? <FaSun /> : <FaMoon />}
//                 </Button>
//               </li>
//               <li className="nav-item me-3 me-lg-0">
//                 {currentUser ? (
//                   <Dropdown
//                     arrowIcon={false}
//                     inline
//                     label={
//                       <Avatar alt='user' img={currentUser.profilePicture} rounded />
//                     }
//                   >
//                     <Dropdown.Header>
//                       <span className='block text-sm'>@{currentUser.username}</span>
//                       <span className='block text-sm font-medium truncate'>
//                         {currentUser.email}
//                       </span>
//                     </Dropdown.Header>
//                     <a href={'/dashboard?tab=profile'}>
//                       <Dropdown.Item>Profile</Dropdown.Item>
//                     </a>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={handleSignout}><Link to='/'>
//                       Sign Out
//                     </Link></Dropdown.Item>
//                   </Dropdown>
//                 ) : (
//                   <a href='#sign'>
//                     <Button gradientDuoTone='purpleToBlue' outline>
//                       Sign Up
//                     </Button>
//                   </a>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* This is the first container content wich is "start learning in our youtube channel" */}
//       <div id="introCarousel" className="carousel slide">
//       <ol className="carousel-indicators">
//         {slides.map((slide, index) => (
//           <li
//             key={index}
//             data-mdb-target="#introCarousel"
//             data-mdb-slide-to={index}
//             className={currentSlide === index ? 'active fade duration-700' : ''}
//           />
//         ))}
//       </ol>
//       <div className="carousel-inner">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
//             >
//             <div className="mask" style={slide.maskStyle}>
//               <div className="d-flex justify-content-center align-items-center h-100">
//                 <div className="text-white text-center">
//                   <h1>{slide.title}</h1>
//                   {slide.subtitle && <h5>{slide.subtitle}</h5>}
//                   {slide.content}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#introCarousel"
//         role="button"
//         data-mdb-slide="prev"
//         onClick={handlePrev}
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#introCarousel"
//         role="button"
//         data-mdb-slide="next"
//         onClick={handleNext}
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//     </div>
//   )
// }