import { Metadata } from "next";
import React from "react";
import Login from "../component/Login";

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <>
      <Login />
    </>
  );
}
