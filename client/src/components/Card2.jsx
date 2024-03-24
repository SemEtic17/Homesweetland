//* Creating a component for Tutors of HSL
import React, { useEffect, useState } from 'react';

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
    <div id={idt} className="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-12 sm:ml-2 mt-8">
        <img className="rounded-t-lg" style={{ height: "400px", width: "350px" }} src={tutimg} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tutname}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
        <ul className="max-w-md space-y-4 text-gray-500 list-none list-inside dark:text-gray-400 mr-4">
    <li className="float-left">
    <span className="font-semibold text-gray-900 dark:text-white">Education :</span> {education}
    </li>
    <li className="float-left">
    <span className="font-semibold text-gray-900 dark:text-white">Gender :</span> {gender}
    </li>
    <br />
    <br />
    <li className="float-left mr-16">
    <span className="font-semibold text-gray-900 dark:text-white">Flexibility :</span> {flexibility}
    </li>
    <li className="float-left">
    <span className="font-semibold text-gray-900 dark:text-white">Email :</span> {tutemail}
    </li>
</ul>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-16">
             Send Email
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )
}







{/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg"  src={hi} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tutname}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
        <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
    <li>
    Education: {education}
    </li>
    <li>
    Gender: {gender}
    </li>
    <li>
    Flexibility: {flexibility}
    </li>
    <li>
    Email: {tutemail}
    </li>
</ul>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Send Email
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}







{/* <div id={idt} className="col-lg-4 col-md-12 mb-4 container-fluid">
      <div className="card border border-4 border-dark h6"> TODO: should add  border-4
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            alt="Tutor"
            src={hi}
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
          <p className="card-text mt-5" style={{ float: "left" }}>
            Education: {education}
          </p>
          <br />
          <br />
          <p className="card-text mt-3" style={{ float: "left" }}>
            Gender: {gender}
          </p>
          <br />
          <br />
          <p className="card-text mt-3" style={{ float: "left" }}>
            Flexibility: {flexibility}
          </p>
          <br />
          <br />
          <p className="card-text mt-3" style={{ float: "left" }}>
            Email: {tutemail}
          </p>

          <a href="#!" className="btn btn-primary mt-5 mr-14">
            Send Email
          </a>
        </div>
      </div>
    </div> */}