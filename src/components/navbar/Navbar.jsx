import React, { useRef, useState, useEffect, useContext } from "react";
import { HiUserCircle } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from "../../context/AuthContext";

const SmallNavbar = () => {
  const [toggleClick, setToggleClick] = useState(false);
  const [toggleClickLang, setToggleClickLang] = useState(false);
  const [hamToggleClick, setHamToggleClick] = useState(false);
  const [dropBox, setDropBox] = useState("h-44");
  const [language, setLanguage] = useState("EN");

  const { currentUser, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/signIn");
  };

  const openMenu = () => {
    setToggleClickLang(!toggleClickLang);
    if (!toggleClickLang) {
      setDropBox("h-72");
    } else {
      setDropBox("h-44");
    }
  };

  let display = toggleClick ? "" : "hidden";
  let displayLang = toggleClickLang ? "" : "hidden";
  let displayHamburgur = hamToggleClick ? "" : "hidden";

  const menuRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setToggleClick(false);
        setDropBox("h-44");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <section>
        <nav className="flex justify-between items-center md:px-4 px-2 border-b">
          <span
            className=" p-1 bg-white shadow-md shadow-gray-300 rounded-sm "
            ref={toggleRef}
          >
            <RxHamburgerMenu
              onClick={() => {
                setHamToggleClick(!hamToggleClick);
              }}
            />
          </span>
          <div className="flex md:gap-2 justify-center items-center px-1 py-5">
            <img src="/images/logo.svg" alt="logo" className="cursor-pointer" />
            <span className="md:text-sm text-xs text-gray-500 px-1 cursor-pointer">
              Customer Area, Europe
            </span>
          </div>
          <div
            className={`flex flex-col justify-evenly items-center absolute top-11 left-0 px-3 w-full bg-white gap-1 ${displayHamburgur}`}
            ref={menuRef}
          >
            <span className="text-md text-gray-600 border-b border-gray py-2 cursor-pointer w-full">
              New Quote
            </span>
            <span className="text-md text-gray-600 border-b border-gray py-2 cursor-pointer w-full">
              My Quotes
            </span>
            <span className="text-md text-gray-600 border-b border-gray py-2 cursor-pointer w-full">
              My Orders
            </span>
            <span
              className="text-md text-gray-600 border-b border-gray cursor-pointer px-3 py-2 flex justify-start items-center gap-2 w-full"
              ref={toggleRef}
              onClick={() => {
                setToggleClick(!toggleClick);
              }}
            >
              <HiUserCircle className="text-xl text-gray-500" />
              {currentUser.displayName}
            </span>
            <div
              className={`flex flex-col  smalldropdown ${dropBox} justify-center h-auto text-sm font-mono bg-white  px-1 text-gray-600 font-semibold ${display} shadow-md shadow-gray-300 w-full`}
              ref={menuRef}
            >
              <div className="overflow-auto">
                <Link
                  to="/account"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1 px-2 hover:text-black ">
                    <HiUserCircle className="text-xl text-gray-500" />
                    Account Details
                  </span>
                </Link>
                <div className="border"></div>
                <Link
                  to="/"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black ">
                    <BiSupport className="text-xl text-gray-500" />
                    Support
                  </span>
                </Link>
                <Link
                  to="/signIn"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span
                    className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black"
                    onClick={handleLogout}
                  >
                    <CiLogout className="text-xl text-gray-500" />
                    Log Out
                  </span>
                </Link>
                <div className="border"></div>
                <span
                  className="flex justify-between items-center cursor-pointer text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black"
                  ref={toggleRef}
                  onClick={openMenu}
                >
                  <span className="flex ">
                    <HiUserCircle className="text-xl text-gray-500" />
                    {language}
                  </span>
                  <AiOutlineDown className="text-md text-gray-500" />
                </span>
                <div className={`${displayLang}`} ref={menuRef}>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("EN");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    English
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("DE");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Deutsch
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("FR");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Francias
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("IT");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Italiano
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("ES");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Espanol
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("DA");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Dansk
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l px-3">
            <span className="md:text-md text-sm text-gray-600 border-b border-gray md:px-2 px-1 py-2 cursor-pointer">
              0 X-points
            </span>
          </div>
        </nav>
      </section>
    </>
  );
};

const LargeNavbar = () => {
  const [toggleClick, setToggleClick] = useState(false);
  const [toggleClickLang, setToggleClickLang] = useState(false);
  const [dropBox, setDropBox] = useState("h-44");
  const [language, setLanguage] = useState("EN");

  const { currentUser, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/signIn");
  };

  const openMenu = () => {
    setToggleClickLang(!toggleClickLang);
    if (!toggleClickLang) {
      setDropBox("h-72");
    } else {
      setDropBox("h-44");
    }
  };

  let display = toggleClick ? "" : "hidden";
  let displayLang = toggleClickLang ? "" : "hidden";

  const menuRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setToggleClick(false);
        setDropBox("h-44");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <section>
        <nav className="lg:flex justify-between items-center px-4 hidden border-b">
          <div className="flex gap-2 justify-center items-center px-1 py-5">
            <img src="/images/logo.svg" alt="logo" className="cursor-pointer" />
            <span className="text-sm text-gray-500 px-1 cursor-pointer">
              Customer Area, Europe
            </span>
          </div>
          <div className="flex justify-evenly items-center gap-8">
            <Link to="/quotes/new">
              <span className="text-md text-gray-600 hover:border-b-2 border-black py-2 cursor-pointer">
                New Quote
              </span>
            </Link>
            <Link to="/quotes">
              <span className="text-md text-gray-600 hover:border-b-2 border-black py-2 cursor-pointer">
                My Quotes
              </span>
            </Link>
            <span className="text-md text-gray-600 hover:border-b-2 border-black py-2 cursor-pointer">
              My Orders
            </span>
            <span
              className="text-md text-gray-600 hover:border-b-2 border-black cursor-pointer px-3 py-2 flex justify-around items-center gap-2"
              ref={toggleRef}
              onClick={() => {
                setToggleClick(!toggleClick);
              }}
            >
              <HiUserCircle className="text-xl text-gray-500" />
              {currentUser.displayName}
            </span>
            <div
              className={`flex flex-col absolute dropdown ${dropBox} justify-center h-auto text-sm font-mono bg-white  px-1 text-gray-600 font-semibold ${display} shadow-md shadow-gray-300`}
              ref={menuRef}
            >
              <div className="overflow-auto">
                <Link
                  to="/account"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1 px-2 hover:text-black ">
                    <HiUserCircle className="text-xl text-gray-500" />
                    Account Details
                  </span>
                </Link>
                <div className="border"></div>
                <Link
                  to="/"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black ">
                    <BiSupport className="text-xl text-gray-500" />
                    Support
                  </span>
                </Link>
                <Link
                  to="/signIn"
                  className="hover:font-bold transition ease-in delay-100 duration-100 cursor-pointer"
                >
                  <span
                    className="flex items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black"
                    onClick={handleLogout}
                  >
                    <CiLogout className="text-xl text-gray-500" />
                    Log Out
                  </span>
                </Link>
                <div className="border"></div>
                <span
                  className="flex justify-between items-center cursor-pointer text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black"
                  ref={toggleRef}
                  onClick={openMenu}
                >
                  <span className="flex ">
                    <HiUserCircle className="text-xl text-gray-500" />
                    {language}
                  </span>
                  <AiOutlineDown className="text-md text-gray-500" />
                </span>
                <div className={`${displayLang}`} ref={menuRef}>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("EN");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    English
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("DE");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Deutsch
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("FR");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Francias
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("IT");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Italiano
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("ES");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Espanol
                  </span>
                  <span
                    className="flex  items-center text-sm gap-2 w-full tracking-tight py-2 hover:bg-sky-100 my-1  px-2 hover:text-black cursor-pointer"
                    onClick={() => {
                      setLanguage("DA");
                    }}
                  >
                    <HiUserCircle className="text-xl text-gray-500" />
                    Dansk
                  </span>
                </div>
              </div>
            </div>
            <div className="border-l px-3">
              <span className="text-md text-gray-600 border-b border-gray px-2 py-2 cursor-pointer">
                0 X-points
              </span>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
      <div className="hidden lg:block">
        <LargeNavbar />
      </div>
    </>
  );
};

export default Navbar;
