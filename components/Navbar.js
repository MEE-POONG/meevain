import React, { useState } from "react";
import { navActiveState } from "/context/navigation";
import { useRecoilState } from "recoil";

function Navbar() {
  const [activeList, setActiveList] = useRecoilState(navActiveState);

  return (
    <body className="fixed bottom-0 z-10 ">
      <nav className=" navigation bg-white  flex  justify-center items-center shadow-2xl">
        <ul className="flex">
          <li
            className={`list ${activeList === 0 ? "active" : ""}  `}
            onClick={() => setActiveList(0)}
          >
            <a href="/">
              <span className="icon  ">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li
            className={`list ${activeList == 1 ? "active" : ""}  `}
            onClick={() => setActiveList(1)}
          >
            <a href="/Calender">
              <span className="icon">
                <ion-icon name="calendar-outline"></ion-icon>
              </span>
              <span className="text">Calender</span>
            </a>
          </li>
          <li
            className={`list ${activeList == 2 ? "active" : ""}  `}
            onClick={() => setActiveList(2)}
          >
            <a href="/Calculator">
              <span className="icon">
                <ion-icon name="calculator-outline"></ion-icon>
              </span>
              <span className="text">Calculator</span>
            </a>
          </li>
          <li
            className={`list ${activeList == 3 ? "active" : ""}  `}
            onClick={() => setActiveList(3)}
          >
            <a href="/profile">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <div className="indicator bg-cyan-500"></div>
        </ul>
      </nav>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </body>
  );
}

export default Navbar;
