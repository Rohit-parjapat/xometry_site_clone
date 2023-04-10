import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayoutHoc(Homepage);
