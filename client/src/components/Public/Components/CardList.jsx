import Card from "./Card.jsx";
//* Displaying the HSL Activities by looping the Card component
export default function CardList({ Robots }) {
  return (
    <div className="container">
      <div id="activities">
        <h4 className="mb-5 d-flex align-items-center justify-content-center">
          <strong>Home Sweet Land Activities</strong>
        </h4>
        {Robots.map((user, i) => {
          return (
            <Card
              Key={Robots[i].id}
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