import Card2 from "./Card2.jsx";
//* Displaying HSL Tutors by looping the Card2 component
import React from "react";

export default function CardList2({ Robots2 }) {
  return (
    <section className="text-center" id="contacts">
      <h4 className="mx-auto mb-5 font-bold text-lg sm:text-xl">
        Home Sweet Land Private Tutors
      </h4>
      <div className="row justify-center max-w-[100%]">
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
  );
}
