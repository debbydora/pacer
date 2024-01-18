"use client";

import React from "react";
import Login from "./login";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

const AppHome = () => {
    const username = useSelector((state) => state.authReducer.value.userName);
  return (
    <div>
      {username ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default AppHome;
