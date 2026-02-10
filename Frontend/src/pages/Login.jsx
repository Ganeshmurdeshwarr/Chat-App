import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sing up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentState === "Sing up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currentState === "Sing up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col md:flex-row items-center justify-center gap-8 sm:justify-evenly max-flex-col backdrop-blur-sm">
      {/* --------------left---------- */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)] " />

      {/* Right */}
      <form
        onSubmit={handleSubmit}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>
        {currentState === "Sing up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {currentState === "Sing up" && isDataSubmitted && (
          <textarea
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus-outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Provide sort Bio"
            required
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        )}

        <button
          type="submit"
          className="py-3 bg-linear-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currentState === "Sing up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the term of use & privacy policy.</p>
        </div>
        <div className="flex flex-col gap-2">
          {currentState === "Sing up" ? (
            <p className="text-sm text-gray-600">
              Already have an Account{" "}
              <span
                onClick={() => {
                  setCurrentState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account{" "}
              <span
                onClick={() => setCurrentState("Sing up")}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
