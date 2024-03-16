import Card2 from "./Card2.jsx";
//* Displaying HSL Tutors by looping the Card2 component
import React from 'react';

export default function CardList2({ Robots2 }) {
  return (
    <section className="text-center" id="contacts">
      <h4 className="mb-5">
        <strong>Home Sweet Land Private Tutors</strong>
      </h4>
      <div className="row">
        {Robots2.map((user, i) => {
          return (
            <Card2
              key={i}
              idt={Robots2[i].idt}
              tutimg={Robots2[i].tutimg}
              about={Robots2[i].about}
              tutname={Robots2[i].tutname}
              education={Robots2[i].education}
              gender={Robots2[i].gender}
              flexibility={Robots2[i].flexibility}
              tutemail={Robots2[i].tutemail}
            />
          );
        })}
      </div>
    </section>
  )
}
