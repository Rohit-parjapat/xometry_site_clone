import React from "react";
import SignUp from "../components/signin and signup/SignUp";
import SignUpLayout from "../layout/SignUpLayout";

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpLayout(SignUpPage);
