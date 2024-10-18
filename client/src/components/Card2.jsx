//* Creating a component for Tutors of HSL
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
    <div
      id={idt}
      className="max-w-[370px] min-[360px]:w-[21rem] h-[640px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-[5rem] sm:ml-2 mt-8"
    >
      <img
        className="rounded-t-lg"
        style={{ height: "360px", width: "350px" }}
        src={tutimg}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {tutname}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {about}
        </p>
        <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 mr-4">
          <li className="float-left ml-[-1.6rem] w-[20rem]">
            <span className="font-semibold text-gray-900 dark:text-white">
              Education :
            </span>{" "}
            {education}
          </li>
          <li className="float-left">
            <span className="font-semibold text-gray-900 dark:text-white">
              Gender :
            </span>{" "}
            {gender}
          </li>
          <br />
          <br />
          <li className="float-left mr-16">
            <span className="font-semibold text-gray-900 dark:text-white">
              Flexibility :
            </span>{" "}
            {flexibility}
          </li>
          <li className="float-left">
            <span className="font-semibold text-gray-900 dark:text-white">
              Email :
            </span>{" "}
            {tutemail}
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        >
          Send Email
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
