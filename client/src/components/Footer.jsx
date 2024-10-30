import { Footer } from "flowbite-react";
import { BsFacebook, BsTiktok, BsYoutube, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPortrait } from "react-icons/fa";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-row justify-between">
          <div className="mt-5">
            <div className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white text-gray-600">
              Contact Creators
            </div>
          </div>
          <div className="grid gap-8 mt-4 sm:gap-6">
            <div className="tooltip-container">
              <div className="button-content">
                <span className="text">Sem Dori</span>
                <svg
                  className="share-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                </svg>
              </div>
              <div className="tooltip-content">
                <div className="social-icons">
                  <Footer.Icon
                    className="social-icon twitter"
                    href="https://github.com/SemEtic17"
                    rel="noreferrer"
                    target="_blank"
                    icon={BsGithub}
                  />
                  <Footer.Icon
                    className="social-icon twitter"
                    href="mailto:semetic17@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    icon={MdEmail}
                  />
                  <Footer.Icon
                    className="social-icon twitter"
                    href="https://semetic17.github.io/Sem-portfolio/"
                    rel="noreferrer"
                    target="_blank"
                    icon={FaPortrait}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/about"
            by="Homesweetland"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/HomesweetlandU/"
              rel="noreferrer"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.tiktok.com/@homesweetland"
              rel="noreferrer"
              target="_blank"
              icon={BsTiktok}
            />
            <Footer.Icon
              href="https://www.youtube.com/homesweetlandu"
              rel="noreferrer"
              target="_blank"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
