"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userName = useSelector((state) => state.authReducer.value.userName);
  const {onLogout} = useAuth()
  return (
    <div className="w-full bg-[#d698df] min-h-screen flex items-center justify-center">
      <section
        aria-label="form-section"
        className="flex flex-col items-center relative"
      >
        <div className="bg-white rounded-lg  p-6 flex flex-col md:w-[800px] justify-center items-center">
          <div aria-label="form-header-texts" className="flex flex-col gap-1 text-center">
            <h1 className=" font-bold text-8xl text-purple-600 mb-4">
              Hurray!
            </h1>
            <h1 className="font-bold text-5xl text-purple-400">
              Welcome {userName}
            </h1>
          </div>

          <button
            onClick={onLogout}
            className="bg-purple-400 rounded-lg text-white p-4 text-sm  mt-4">
            Log out
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
