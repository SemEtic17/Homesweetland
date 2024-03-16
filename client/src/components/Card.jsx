//* Creating a component for Activities of HSL
// import React from 'react'
// import s from './img/'
import h from './img/Logo.png';
export default function Card({ actname, actimg, description, id }) {
   const hi = h.replace('Logo.png', actimg)
  return (
    <div id={id}>
      <div className="row">
        <div className="col-md-6 gx-5 mb-4">
          <div
            className="bg-image hover-overlay ripple shadow-2-strong"
            data-mdb-ripple-color="light"
          >
            <img
              src={hi}
              className="img-fluid w-full"
              alt="activities"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </div>

        <div className="col-md-6 gx-5 mb-4">
          <h4>
            <strong>{actname}</strong>
          </h4>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  )
}
