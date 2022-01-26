import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";


function Calender() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-sky-100 h-screen ">
      <div className="flex justify-center h-full  ">
      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
      <Navbar />
    </div>
  );
}

export default Calender;
