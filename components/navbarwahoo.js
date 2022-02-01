import * as React from "react";
import { useRouter } from "next/router";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import {
  BsCalendar2Date,
  BsCalendarPlus,
  BsCalculator,
  BsPerson,
  BsHouseDoor,
} from "react-icons/bs";

export default function Wahool() {
  const [value, setValue] = React.useState("recents");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        value={value}
        className=" text-2xl"//bg-color??
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="ปฏิทิน"
          value="Calendar"
          icon={<BsCalendar2Date />}
          type="button"
          onClick={() => {
            router.push("/Calender");
          }}
        />
        <BottomNavigationAction
          label="หน้าหลัก"
          value="Home"
          icon={<BsHouseDoor />}
          type="button"
          onClick={() => {
            router.push("/");
          }}
        />
        <BottomNavigationAction
          label="เพิ่มเวร"
          value="Plus"
          icon={<BsCalendarPlus />}
          type="button"
          onClick={() => {
            router.push("/admin/morevain");
          }}
        />
        <BottomNavigationAction
          label="คำนวน"
          value="Calculate"
          icon={<BsCalculator />}
          type="button"
          onClick={() => {
            router.push("/Calculator");
          }}
        />
        <BottomNavigationAction
          label="โปรไฟล์"
          value="Profile"
          icon={<BsPerson />}
          type="button"
          onClick={() => {
            router.push("/profile");
          }}
        />
      </BottomNavigation>
    </div>
  );
}
