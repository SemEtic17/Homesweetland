//* Creating a component for Activities of HSL
export default function Card({ actname, actimg, description, id }) {
  return (
    <div id={id}>
      <div className="row">
        <div className="col-md-6 col-lg-5 gx-5 mb-4">
          <div
            className="bg-image hover-overlay ripple shadow-2-strong lg:w-[450px] lg:h-[250px]"
            data-mdb-ripple-color="light"
          >
            <img
              src={actimg}
              className="img-fluid w-full lg:w-[450px] lg:h-[250px]"
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
  );
}
