import Card from "./Card.jsx";

//* Displaying the HSL Activities by looping the Card component

export default function CardList({ Robots }) {
  return (
    <div className="container">
      <div id="activities">
        <div className="parent-container">
          <h4 className="mx-auto mb-5 font-bold text-lg sm:text-xl">
            Home Sweet Land Activities
          </h4>
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
  );
}
