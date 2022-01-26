import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Calender() {
  const [activeList, setActiveList] = useState(1);

  return (
    <div className="bg-sky-100 h-screen ">
      <div></div>
      <Navbar />
    </div>
  );
}

export default Calender;
