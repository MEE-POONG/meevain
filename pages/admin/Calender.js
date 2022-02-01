import React, { useState, useEffect } from "react";
import moment from "moment";
import NavbarAdmin from "../../components/NavbarAdmin";
import calendarBuild from "./CalenBuild";
import dayStyles, { beforeToday } from "./CalendarStyle";
import CalendarHeader from "./headerCalendar";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import Wahool from "../../components/navbarwahoo";

export default function Calender() {
  const [value, setValue] = useState(moment());
  const [showModalVain, setShowModalVain] = useState();
  const [calendar, setCalendar] = useState([]);
  useEffect(() => {
    setCalendar(calendarBuild(value));
  }, [value]);

  return (
    <div className=" bg-sky-100  min-h-screen">
      <div className="max-w-md mx-auto">
        <CalendarHeader value={value} setValue={setValue} />

        <div key="" className="body bg-white text-center    ">
          <div className="grid grid-cols-7 text-lg p-2 text-red-500   uppercase col-span-1   ext-center ">
            {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((d) => (
              <div key="" className="week">
                {d}
              </div>
            ))}
          </div>
          {calendar.map((week) => (
            <div key="" className="grid grid-cols-7 p-2   z-0  ">
              {week.map((day) => (
                <div
                  key=""
                  className="col-span-1   "
                  onClick={() => !beforeToday(day) && setValue(day)}
                >
                  <div
                    className={
                      dayStyles(day, value) +
                      " border border-1 rounded-lg p-2 m-1 hover:bg-sky-500"
                    } 
                    onClick={() => setShowModalVain(true)}
                  >
                    {" "}
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>{" "}
      {showModalVain ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModalVain(false)}
            />
            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center font-bold ">
                วันที่ {} {" "}
              </h2>
              
            </div>
          </div>
        </div>
      ) : null}{" "}
      <Wahool/>
    </div>
  );
}
