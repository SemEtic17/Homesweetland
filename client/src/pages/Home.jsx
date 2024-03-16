import Header from "../components/Headerr.jsx";
import CardList from "../components/CardList.jsx";
import { Robots } from "../components/Robots.js";
import CardList2 from "../components/CardList2.jsx";
import { Robots2 } from "../components/Robots2.js";
import SignUp from './SignUp.jsx';
import FFoter from '../components/footerfh.jsx';
import CallToAction from '../components/CallToAction';
export default function App() {
  return (
    <div>
       <Header></Header>
     <div className="mt-5">
        <CardList Robots={Robots} />
        <hr className="my-5" />
        <CardList2 Robots2={Robots2} />
        <hr className="my-5" />
        {/*This is sponser aria */}
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
        <SignUp />
        <FFoter />
      </div>
    </div>
  );
}

