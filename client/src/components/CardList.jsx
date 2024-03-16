import Card from "./Card.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { FaMoon, FaSun } from 'react-icons/fa';
import {Button} from 'flowbite-react';

//* Displaying the HSL Activities by looping the Card component

export default function CardList({ Robots }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="container ml">
      <div id="activities">
      <div className="parent-container">  <h4 className="mb-5 d-flex align-items-center ml-24 md:ml-[550px]">
    <strong>Home Sweet Land Activities </strong>
  </h4>
  <Button
    className='w-12 h-10'
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