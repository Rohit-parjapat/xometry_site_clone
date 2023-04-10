import React, { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import { BiLockOpen } from "react-icons/bi";
import { GrSend } from "react-icons/gr";

const AccountDetails = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <section className="bg-gray-100 pb-12">
        <div className="flex justify-between items-center mx-36 py-3 ">
          <span className="text-2xl font-bold tracking-wide">
            Account Details
          </span>
          <span className="flex justify-center items-center gap-1 text-blue-700 text-sm font-medium">
            <GrSend className="text-blue-700 text-lg" />
            Ask a question
          </span>
        </div>
        <div className="w-[60rem] mx-auto pt-6 shadow-md rounded bg-white">
          <div className="flex justify-start items-center gap-1 mx-5 py-4 border-b">
            <BiUser className="bg-gray-600  text-white text-5xl p-1 rounded" />
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-gray-500 text-xs font-semibold">
                User ID:12345
              </span>
              <span className="text-sm font-semibold">
                {currentUser.displayName}
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-start items-start gap-8 px-5 pt-5">
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">
                  Full Name
                </h3>
                <span className="text-sm font-semibold">
                  {currentUser.displayName}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">
                  Job Title
                </h3>
                <span className="text-sm font-semibold">
                  Full Stack Web Developer
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-10 px-5  pt-5">
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">
                  Phone Number
                </h3>
                <span className="text-sm font-semibold">
                  {currentUser.displayName}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">Email</h3>
                <span className="text-sm font-semibold">
                  {currentUser.email}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">
                  Email for invoices
                </h3>
                <span className="text-sm font-semibold">-</span>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 px-2">
                <h3 className="text-gray-500 text-xs font-semibold">
                  Language
                </h3>
                <span className="text-sm font-semibold">EN</span>
              </div>
            </div>
            <div className="px-7 flex justify-start items-center gap-16 border-b  py-5">
              <span className="bg-blue-500 text-white px-7 py-1 rounded-sm">
                Edit Profile Details
              </span>
              <span className="flex gap-1 items-center text-blue-600 text-sm hover:underline cursor-pointer px-1 font-semibold">
                <BiLockOpen />
                Reset password
              </span>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 px-8  py-5">
              <h2 className="font-semibold py-2">Email Subscriptions</h2>
              <span className="text-sm font-semibold pb-5">
                Receive service and product updates, special offers and
                discounts
              </span>
              <span className="text-blue-600 text-sm hover:underline cursor-pointer font-semibold">
                Edit subscription preferences
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountDetails;
