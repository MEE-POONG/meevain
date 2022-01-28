import React, { useState, useEffect } from "react";
import moment from "moment";
import NavbarAdmin from "../../components/NavbarAdmin";
import calendarBuild from "./CalenBuild";
import dayStyles, { beforeToday } from "./CalendarStyle";
import CalendarHeader from "./headerCalendar";

export default function Calender() {
  const [value, setValue] = useState(moment());
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
            {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
              <div key="" className="week">
                {d}
              </div>
            ))}
          </div>
          {calendar.map((week) => (
            <div key="" className="grid grid-cols-7 p-2   z-10  ">
              {week.map((day) => (
                <div
                  key=""
                  className="col-span-1   "
                  onClick={() => !beforeToday(day) && setValue(day)}
                >
                  <div className={dayStyles(day, value) +" border border-1 rounded-lg p-2 m-1 hover:bg-sky-500" }>
                    {" "}
                    {day.format("D").toString()}
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
