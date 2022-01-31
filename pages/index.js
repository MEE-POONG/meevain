import React from "react";
import Home from "./home";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <div className="mx-auto min-w-full">
      <Home />
      <Navbar />
    </div>
  );
}
