import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";

//db connection
import { auth } from "../../Database/dbConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);
  const handleSignIn = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          navigate("/quotes");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };

  return (
    <section className="bg-gray-50 w-full pt-10 pb-40 backgroundImage">
      <div className="bg-white  lg:w-[28rem] mx-auto drop-shadow-lg py-8">
        <div className="text-center">
          <span className="text-lg font-bold">Log in to Xometry Europe</span>
        </div>
        <div className="flex flex-wrap justify-between items-center px-8">
          <span className="flex items-center justify-start gap-1 w-full border border-gray-300 mt-5 py-1 rounded-sm px-2">
            <AiOutlineMail className="text-blue-600 text-md" />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              onChange={handleChange}
              className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
            />
          </span>
          <span className="flex items-center justify-start gap-1 w-full border border-gray-300 mt-5 py-1 rounded-sm px-2">
            <BiLockOpen className="text-blue-600 text-md" />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={handleChange}
              className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
            />
          </span>
        </div>
        <div className="flex justify-between items-center py-5 px-8">
          <span className="flex justify-start items-center gap-1">
            <input
              type="checkbox"
              name="remember"
              className="hover:outline-blue-500 cursor-pointer"
            />
            <span>Remember me</span>
          </span>
          <span className="text-blue-600 hover:underline cursor-pointer px-1 ">
            Forgot password?
          </span>
        </div>
        <div className=" mx-8">
          <button
            type="submit"
            onClick={handleSignIn}
            className=" bg-blue-500 text-white font-semibold text-md w-full my-4  py-2 rounded-sm "
          >
            Sign in
          </button>
        </div>
        <span className=" text-xs font-medium px-8">
          New to Xometry?
          <Link
            to="/signUp"
            className="text-blue-600 hover:underline cursor-pointer px-1 "
          >
            Join Now
          </Link>
        </span>
      </div>
    </section>
  );
};
export default LogIn;
