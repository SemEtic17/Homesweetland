import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Public from './pages/Home';

export default function App() {
  return (
    <div>
       <BrowserRouter>

   <ScrollToTop />
   <Routes>
   <Route path={'/dashbord'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/about'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/sign-in'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/sign-up'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/search'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/dashboard'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/create-post'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/update-post/:postId'} element={<Header />} />
   </Routes>
   <Routes>
   <Route path={'/post/:postSlug'} element={<Header />} />
   </Routes>


   <Routes>
     <Route path="/" element={<Public />} />
     <Route path='/dashbord' element={<Main />} />
     <Route path='/about' element={<About />} />
     <Route path='/sign-in' element={<SignIn />} />
     <Route path='/sign-up' element={<SignUp />} />
     <Route path='/search' element={<Search />} />
     <Route element={<PrivateRoute />}>
       <Route path='/dashboard' element={<Dashboard />} />
     </Route>
     <Route element={<OnlyAdminPrivateRoute />}>
       <Route path='/create-post' element={<CreatePost />} />
       <Route path='/update-post/:postId' element={<UpdatePost />} />
     </Route>
     <Route path='/post/:postSlug' element={<PostPage />} />
   </Routes>


   <Routes>
   <Route path={'/dashbord'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/about'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/sign-in'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/sign-up'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/search'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/dashboard'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/create-post'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/update-post/:postId'} element={<Footer />} />
   </Routes>
   <Routes>
   <Route path={'/post/:postSlug'} element={<Footer />} />
   </Routes>
  
  
   </BrowserRouter>
    </div>
  );
}



{/* <BrowserRouter>
      <ScrollToTop />
      
      {window.location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<Public />} /> 

        <Route path="/dashbord" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      {window.location.pathname !== '/' && <Footer />}
    </BrowserRouter> */}








    // <BrowserRouter>

    //   <ScrollToTop />
    //   <Routes>
    //   <Route path={'/dashbord'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/about'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/sign-in'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/sign-up'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/search'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/dashboard'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/create-post'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/update-post/:postId'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/projects'} element={<Header />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/post/:postSlug'} element={<Header />} />
    //   </Routes>


    //   <Routes>
    //     <Route path="/" element={<Public />} />
    //     <Route path='/dashbord' element={<Main />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/sign-in' element={<SignIn />} />
    //     <Route path='/sign-up' element={<SignUp />} />
    //     <Route path='/search' element={<Search />} />
    //     <Route element={<PrivateRoute />}>
    //       <Route path='/dashboard' element={<Dashboard />} />
    //     </Route>
    //     <Route element={<OnlyAdminPrivateRoute />}>
    //       <Route path='/create-post' element={<CreatePost />} />
    //       <Route path='/update-post/:postId' element={<UpdatePost />} />
    //     </Route>
    //     <Route path='/projects' element={<Projects />} />
    //     <Route path='/post/:postSlug' element={<PostPage />} />
    //   </Routes>


    //   <Routes>
    //   <Route path={'/dashbord'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/about'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/sign-in'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/sign-up'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/search'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/dashboard'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/create-post'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/update-post/:postId'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/projects'} element={<Footer />} />
    //   </Routes>
    //   <Routes>
    //   <Route path={'/post/:postSlug'} element={<Footer />} />
    //   </Routes>
      
      
    //   </BrowserRouter>