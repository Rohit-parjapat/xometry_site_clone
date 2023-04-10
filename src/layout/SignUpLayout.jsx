import React from "react";
import SignUpNavbar from "../components/navbar/SignUpNavbar";
import Footer from "../components/footer/Footer";

const SignUpLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <SignUpNavbar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default SignUpLayout;
