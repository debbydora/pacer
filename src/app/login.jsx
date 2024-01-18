"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";

const Login = () => {
  const { userData, handleChange, onLogin } = useAuth();
  console.log(userData, "userdata");
  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen flex items-center justify-center">
      <section
        aria-label="form-section"
        className="flex flex-col items-center relative"
      >
        <div className="bg-white rounded-lg  p-10 flex flex-col md:w-[522px]">
          <div aria-label="form-header-texts" className="flex flex-col gap-1">
            <h1 className=" font-bold text-[24px] text-sky-400">Welcome</h1>
            <p className="text-[#606060] text-xs">Sign in to your dashboard</p>
            <hr className="mt-4 border-2 border-[#F5F6F8]" />
          </div>

          <form aria-label="signIn-form" className="mt-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor={"userName"}
                className={`block text-[14px] font-medium text-textBlack `}
              >
                Enter user name
              </label>
              <input
                onChange={handleChange}
                name="userName"
                value={userData.userName}
                type="text"
                className={`mb-3 w-full h-[55px] border-[1px] rounded-lg p-2 bg-white outline-none border-[#CCC]`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor={"password"}
                className={`block text-[14px] font-medium
                      text-textBlack `}
              >
                Enter Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                value={userData.password}
                type="password"
                className={`mb-3 w-full h-[55px] border-[1px] rounded-lg p-2 bg-white outline-none border-[#CCC]
                   `}
              />
            </div>
          </form>
          <button
            onClick={onLogin}
            className="bg-sky-400 rounded-lg text-white p-4 text-sm w-full mt-4"
          >
            Sign in
            {/* {isLoading ? "Signing in..." : "Sign in"} */}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
