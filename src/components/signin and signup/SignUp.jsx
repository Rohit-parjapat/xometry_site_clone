import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

//db connection
import { auth } from "../../Database/dbConnection";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    password: "",
    mobNumber: "",
  });

  const navigate = useNavigate();

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password,
        inputValues.mobNumber
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.fullName,
        });
        navigate("/signIn");
      });
    } catch (error) {}
  };

  return (
    <>
      <section className="bg-gray-50 w-full pt-10 pb-28 backgroundImage">
        <div className="bg-white  lg:w-1/2 mx-auto drop-shadow-lg py-8">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-lg font-semibold">Create an account</span>
            <span className="text-sm">
              Looking to become a partner?
              <span className="text-blue-600 hover:underline cursor-pointer px-1 text-sm">
                Sign up here
              </span>
            </span>
          </div>
          <form>
            <div className="flex flex-wrap justify-between items-center px-8">
              <span className="flex items-center justify-start gap-1 lg:w-[17rem] w-full  border border-gray-300 mt-5 py-1 rounded-sm px-2">
                <BiUser className="text-blue-600 text-md" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={inputValues.fullName}
                  onChange={handleChange}
                  required={true}
                  className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
                />
              </span>
              <span className="flex items-center justify-start gap-1 lg:w-[17rem] w-full border border-gray-300 mt-5 py-1 rounded-sm px-2">
                <TfiBag className="text-blue-600 text-md" />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={inputValues.password}
                  onChange={handleChange}
                  className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
                />
              </span>
              <span className="flex items-center justify-start gap-1 lg:w-[17rem] w-full border border-gray-300 mt-5 py-1 rounded-sm px-2">
                <AiOutlineMail className="text-blue-600 text-md" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={inputValues.email}
                  onChange={handleChange}
                  required={true}
                  className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
                />
              </span>
              <span className="flex items-center justify-start gap-1 lg:w-[17rem] w-full border border-gray-300 mt-5 py-1 rounded-sm px-2">
                <BiPhoneCall className="text-blue-600 text-md" />
                <input
                  type="number"
                  name="mobNumber"
                  placeholder="Mobile"
                  value={inputValues.mobNumber}
                  onChange={handleChange}
                  required={true}
                  className="text-sm text-gray-400 px-1 border-none outline-none w-full py-1"
                />
              </span>
            </div>

            <div className="mt-5">
              <span className="flex justify-start items-center gap-1 px-8 py-1">
                <input
                  type="checkbox"
                  required
                  className="hover:outline-blue-500 cursor-pointer"
                />
                <p className="text-xs text-gray-500">
                  I agree to receive service and product updates, special offers
                  and discounts.
                </p>
              </span>
              <span className="flex justify-start items-center gap-1 px-8 py-1">
                <input
                  type="checkbox"
                  required
                  className="hover:outline-blue-500 cursor-pointer"
                />
                <p className="text-xs text-gray-500">
                  I reviewed and agree to Xometry Europe's
                  <span className="text-blue-600 hover:underline cursor-pointer px-1">
                    Terms and Conditions
                  </span>
                  and
                  <span className="text-blue-600 hover:underline cursor-pointer px-1">
                    Privacy Policy
                  </span>
                </p>
              </span>
            </div>
            <div className="flex justify-center items-center shadow-md w-[15.5rem] mx-auto mt-8">
              <div className="flex flex-col justify-start items-start gap-1 w-full bg-blue-600 px-4 py-1">
                <span className="text-sm text-white">
                  protected by reCAPTCHA
                </span>
                <span className="text-xs text-white hover:underline cursor-pointer">
                  Privacy - Terms
                </span>
              </div>
              <div className="px-1">
                <img src="/images/verify.png" alt="verify" />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleRegister}
                className="flex justify-center bg-blue-500 text-white font-semibold text-md mx-auto my-4 w-[19rem] py-2 rounded-sm"
              >
                Sign up
              </button>
            </div>
          </form>
          <span className="flex justify-center text-xs items-center font-medium">
            Already registered?
            <Link
              to="/signIn"
              className="text-blue-600 hover:underline cursor-pointer px-1 "
            >
              Login to your account
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default SignUp;
