import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import useLangNav from "../hooks/useLangNav";
import { Link } from "react-router-dom";
import logo from "../assets/resources/icons/hylls-logo.svg";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { optionsNav, phrase, changeLanguage } = useLangNav();

  const toggleShow = () => {
    setShow(!show);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="absolute w-full z-10">
      <div className="bg-[#00000070] flex justify-end h-20 items-center">
        {!show ? (
          <div className="w-full h-4/6 flex justify-center">
            <img src={logo} alt="logo" />
          </div>
        ) : (
          <div className="w-full flex justify-between p-5">
            <div className="flex gap-2">
              <button className="border-r-2 border-[#E8D8B0] px-1" onClick={()=>changeLanguage('es')}>
                ESP
              </button>
              <button className="border-r-2 border-[#E8D8B0] px-1" onClick={()=>changeLanguage('en')}>
                ENG
              </button>
            </div>
          </div>
        )}

        <button onClick={toggleShow} className="pr-5">
          {show ? (
            <XMarkIcon className="w-10 pointer-events-none" />
          ) : (
            <Bars3Icon className="w-10 pointer-events-none" />
          )}
        </button>
      </div>
      <motion.div
        initial="closed"
        animate={show ? "open" : "closed"}
        variants={menuVariants}
        className={`bg-[#00000070] p-5 ${show ? "" : "hidden"}`}
      >
        {optionsNav.map((options, index) => (
          <div key={index}>
            <Link to={options.path}>
              <h2>{options.title}</h2>
            </Link>
            {options.routes.map((routes, i) => (
              <ul key={i}>
                <Link to={routes.path}>
                  <li className="opacity-50 transition-all hover:opacity-100">
                    {routes.name}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        ))}
        <h2 className="uppercase text-4xl font-extrabold font-plaster transition-all duration-600">
          {phrase}
        </h2>
      </motion.div>
    </div>
  );
};

export default NavBar;
