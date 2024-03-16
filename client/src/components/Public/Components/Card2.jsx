//* Creating a component for Tutors of HSL
import React from 'react';

export default function Card2({
  idt,
  tutimg,
  tutname,
  about,
  education,
  gender,
  flexibility,
  tutemail,
}) {
  return (
    <div id={idt} className="col-lg-4 col-md-12 mb-4 container-fluid">
      <div className="card border border-dark h6 border-4">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            alt="Tutor"
            src={require(`./img/${tutimg}`)}
            className="img-fluid"
            style={{ height: "400px", width: "300px" }}
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{tutname}</h5>
          <p className="card-text">{about}</p>
          <p className="card-text" style={{ float: "left" }}>
            Education: {education}
          </p>
          <br />
          <br />
          <p className="card-text" style={{ float: "left" }}>
            Gender: {gender}
          </p>
          <br />
          <br />
          <p className="card-text" style={{ float: "left" }}>
            Flexibility: {flexibility}
          </p>
          <br />
          <br />
          <p className="card-text" style={{ float: "left" }}>
            Email: {tutemail}
          </p>

          <a href="#!" className="btn btn-primary">
            Send Email
          </a>
        </div>
      </div>
    </div>
  )
}
