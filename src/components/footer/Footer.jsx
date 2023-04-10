import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Card() {
  return (
    <footer className="flex flex-wrap md:flex-nowrap lg:justify-around justify-center items-center gap-5 bg-blue-950 px-5 py-12 w-full">
      <div className="flex flex-col items-baseline lg:justify-start justify-end gap-4 lg:px-10 md:w-[15rem] lg:w-[32rem] w-[15rem]">
        <div className="flex justify-center items-center gap-1">
          <img src="/images/white-logo.svg" alt="logo" />
          <span className="text-white text-sm">Cunsumer Area</span>
        </div>
        <div className="flex flex-col  items-start text-gray-400 text-sm">
          <span>© 2017-2023, Xometry Europe GmbH</span>
          <span>Account:#12334</span>
        </div>
      </div>
      <div className="h-36 border border-gray-600"></div>
      <div className="flex flex-col items-center gap-4 lg:px-6 text-white md:w-[8rem] lg:w-[19rem] w-[15rem]">
        <div>
          <BiSupport className="text-3xl" />
        </div>
        <div className="flex flex-col  items-start text-sm">
          <span>Terms & Conditions Privacy Policy</span>
          <span>Contacts & Imprints</span>
          <span>Privacy Settings</span>
        </div>
      </div>
      <div className="h-36 border border-gray-600 hidden md:block"></div>
      <div className="flex flex-col items-center gap-4 lg:px-8 text-white md:w-[8rem] lg:w-[19rem] w-[15rem]">
        <div>
          <AiOutlinePhone className="text-3xl" />
        </div>
        <div className="flex flex-col  items-start text-sm">
          <span>+49-89-3803-4818</span>
          <span>+33-1-76-35-12-17</span>
          <span>help@xometry.eu</span>
        </div>
      </div>
      <div className="h-36 border border-gray-600"></div>
      <div className="flex flex-col items-center gap-4 lg:px-8 text-white md:w-[12rem] lg:w-[22rem] w-[15rem]">
        <div>
          <GoLocation className="text-3xl" />
        </div>
        <div className="flex flex-col  items-start text-sm">
          <span>Ada-Lovelace-Str. 9, 85521 Ottobrunn, Germany</span>
        </div>
      </div>
    </footer>
  );
}

export default Card;
