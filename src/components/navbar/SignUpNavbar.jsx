import React, { useRef, useState, useEffect } from "react";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const SmallNavbar = () => {
  const [toggleClick, setToggleClick] = useState(false);
  const [hamToggleClick, setHamToggleClick] = useState(false);
  const [language, setLanguage] = useState("EN");

  const URLSignUp = window.location.href;

  let onSignUp = "hidden";

  if (URLSignUp === "http://localhost:3000/signUp") {
    onSignUp = "";
  }

  let onLogin = "hover:border-b-2";
  const URLSignIn = window.location.href;

  if (URLSignIn === "http://localhost:3000/signIn") {
    onLogin = "border-b-2";
  }

  let display = toggleClick ? "" : "hidden";
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
            className={`flex flex-col absolute z-10 top-11 left-0 px-3 w-full bg-white gap-1 ${displayHamburgur}`}
            ref={menuRef}
          >
            <span
              className="text-md text-gray-600 cursor-pointer px-1 py-2 flex justify-start items-center gap-2"
              ref={toggleRef}
              onClick={() => {
                setToggleClick(!toggleClick);
              }}
            >
              <HiUserCircle className="text-xl text-gray-500" />
              {language}
            </span>
            <Link to="/signIn">
              <span
                className={`text-md text-gray-600 ${onLogin} border-black py-2 cursor-pointer`}
              >
                Log in
              </span>
            </Link>
            <span
              className={`text-md text-gray-600 border-b-2 border-black py-2 cursor-pointer ${onSignUp}`}
            >
              Sign up
            </span>
            <div
              className={`flex flex-col justify-center h-auto text-sm font-mono bg-white  px-1 text-gray-600 font-semibold ${display} shadow-md shadow-gray-300`}
              ref={menuRef}
            >
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
        </nav>
      </section>
    </>
  );
};

const LargeNavbar = () => {
  const [toggleClick, setToggleClick] = useState(false);
  const [language, setLanguage] = useState("EN");

  const URLSignUp = window.location.href;

  let onSignUp = "hidden";

  if (URLSignUp === "http://localhost:3000/signUp") {
    onSignUp = "";
  }

  let onLogin = "hover:border-b-2";
  const URLSignIn = window.location.href;

  if (URLSignIn === "http://localhost/3000/signIn") {
    onLogin = "border-b-2";
    console.log("true");
  }

  let display = toggleClick ? "" : "hidden";

  const menuRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setToggleClick(false);
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
          <div className="flex gap-2 justify-center items-center px-1 py-4">
            <img src="/images/logo.svg" alt="logo" className="cursor-pointer" />
            <span className="text-sm text-gray-500 px-1 cursor-pointer">
              Customer Area, Europe
            </span>
          </div>
          <div className="flex justify-evenly items-center gap-8">
            <span
              className="text-md text-gray-600 hover:border-b-2 border-black cursor-pointer px-3 py-2 flex justify-around items-center gap-2"
              ref={toggleRef}
              onClick={() => {
                setToggleClick(!toggleClick);
              }}
            >
              <HiUserCircle className="text-xl text-gray-500" />
              {language}
            </span>
            <Link to="/signIn">
              <span
                className={`text-md text-gray-600 ${onLogin} border-black py-2 cursor-pointer`}
              >
                Log in
              </span>
            </Link>
            <span
              className={`text-md text-gray-600 border-b-2 border-black py-2 cursor-pointer ${onSignUp}`}
            >
              Sign up
            </span>
            <div
              className={`flex flex-col absolute dropdown justify-center h-auto text-sm font-mono bg-white  px-1 text-gray-600 font-semibold ${display} shadow-md shadow-gray-300`}
              ref={menuRef}
            >
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
        </nav>
      </section>
    </>
  );
};

const SignUpNavbar = () => {
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

export default SignUpNavbar;
