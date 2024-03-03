import React, { useState } from "react";
import googleLogo from "../../assets/google.png";
import {
  validEmail,
  validPassword,
} from "../../utils/service/validation/validation";
import { login } from "../../utils/service/API/auth";

const Login = () => {
  interface FormData {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginErr, setLoginErr] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setLoginErr(false);
      setIsEmailValid(false);
      setIsPasswordValid(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (!formData.email) {
        setIsEmailValid(true);
        setErrMessage("Enter your email");
      } else if (!validEmail.test(formData.email)) {
        setIsEmailValid(true);
        setErrMessage("Enter a valid email");
      } else if (!formData.password) {
        setIsPasswordValid(true);
        setErrMessage("Enter your password");
      } else if (!validPassword.test(formData.password)) {
        setIsPasswordValid(true);
        setErrMessage("password is atleast  6 character");
      } else {
        const result: any = await login(formData);
        console.log("result", result);
        if (result?.status === 200) {
          setFormData({
            email: "",
            password: "",
          });
        } else {
          setLoginErr(true);
          setErrMessage(result?.response?.data?.message);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Email Input Field */}
          {loginErr && <p className="text-sm text-red-500">{errMessage}</p>}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            {isEmailValid && (
              <p className="text-sm text-red-500">{errMessage}</p>
            )}
          </div>
          {/* Password Input Field */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            {isPasswordValid && (
              <p className="text-sm text-red-500">{errMessage}</p>
            )}
            {/* Toggle Password Visibility Button */}
            <button
              className="absolute top-0 right-0 mt-2 mr-4 focus:outline-none"
              onClick={togglePasswordVisibility}
              type="button" // This line ensures the button does not submit the form
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* Continue With Google Button */}
          <div className="flex items-center justify-center">
            <button
              className="rounded py-1 bg-white shadow-md focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
              type="button"
            >
              <img
                src={googleLogo}
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Continue With Google
            </button>
          </div>
          {/* Sign In and Forgot Password Links */}
          <div className="flex items-center justify-between mt-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
