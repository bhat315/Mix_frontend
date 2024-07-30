import React from "react";
// import logo from "../../assets/images/22.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://github.com/bhat315",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/praveenbhat315/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" test py-10">
      <div className="container mx-auto px-10 flex justify-between items-start">
        <div className="flex-shrink-0">
          {/* <img src={logo} alt="Logo" className="h-48" /> */}
        </div>
        <div className="flex flex-col items-end text-right">
          <p className="text-base mb-4">
            &copy; {year} Developed by Praveen Bhat
          </p>
          <ul className="flex flex-wrap gap-6 mb-4">
            {quickLinks01.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-base hover:text-orange-400 transition duration-300"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-solid border-gray-600 rounded-full flex justify-center items-center group hover:bg-blue-500 transition duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
