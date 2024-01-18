"use client";

import React, { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onLogin = () => {
    dispatch(logIn(userData.userName))
  };

  const onLogout = () => {
    dispatch(logOut())
  }
  return {
    handleChange,
    userData,
    onLogin,
    onLogout,
  };
};

export default useAuth;
