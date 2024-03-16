//* Creating a component for Activities of HSL
import React from 'react'

export default function Card({ actname, actimg, description, id }) {
  return (
    <div id={id}>
      <div className="row">
        <div className="col-md-6 gx-5 mb-4">
          <div
            className="bg-image hover-overlay ripple shadow-2-strong"
            data-mdb-ripple-color="light"
          >
            <img
              src={require(`./img/${actimg}`)}
              className="img-fluid"
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
