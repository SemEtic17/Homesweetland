import Card from "./Card.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { FaMoon, FaSun } from 'react-icons/fa';
import {Button} from 'flowbite-react';
import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';

//* Displaying the HSL Activities by looping the Card component

export default function CardList({ Robots }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);

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

  return (
    <div className="container ml">
      <div id="activities">
      <div className="parent-container">
      {currentUser ? (
        <div className='mb-[35px] lg:hidden'>
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
                      <Link to='/dashbord'>Ckeck assighnments</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <a href={'/dashboard?tab=profile'}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </a>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignout}><Link to='/'>
                      Sign Out
                    </Link></Dropdown.Item>
                  </Dropdown>
              </div>
                ) : (
                  
                  <a href='#sign' className='w-[6rem] h-[2rem] mb-[35px] lg:hidden'>
                    <Button className='' gradientDuoTone='purpleToBlue' outline>
                      Sign Up
                    </Button>
                  </a>
              
                )}
      <h4 className="mb-5 d-flex align-items-center justify-content-center text-center lg:ml-[33rem] md:ml-[33rem] ml-[-1rem]">
  <strong>Home Sweet Land Activities</strong>
</h4>

  <Button
    className='w-12 h-10 mb-3'
    color='gray'
    pill
    onClick={() => dispatch(toggleTheme())}
  >
    {theme === 'light' ? <FaSun /> : <FaMoon />}
  </Button>
</div>
        {Robots.map((user, i) => {
          return (
            <Card
              key={Robots[i].id}
              id={Robots[i].id}
              actname={Robots[i].actname}
              actimg={Robots[i].actimg}
              description={Robots[i].description}
            />
          );
        })}
      </div>
    </div>
  )
}