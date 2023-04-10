import React from "react";
import SignIn from "../components/signin and signup/SignIn";
import SignUpLayout from "../layout/SignUpLayout";

const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignUpLayout(SignInPage);
