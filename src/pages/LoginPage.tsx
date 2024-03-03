import React from "react";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-5">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
