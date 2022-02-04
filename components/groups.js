import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { MdOutlineCancel, MdVerified } from "react-icons/md";
import { listGroupState } from "../context/listgroup";
import axios from "axios";
import { data } from "autoprefixer";

const defaultGroupState = [];
export default function Groups() {
  const [groupList, setGroupList] = useState(defaultGroupState);
  // const listGroup = useRecoilValue(listGroupState);
  // console.log(groupList);
  

  useEffect(() => {
    getGroupData();
  }, []);

  const getGroupData = async () => {
    try {
      const { data } = await axios.get("/api/group");
      setGroupList(data?.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <div>
      {groupList?.map((groupList) => (
        <div
          key={groupList}
          className="rounded-2xl shadow-lg text-white mb-2"
          type="button"
          style={{ backgroundColor: groupList.color }}
        >
          <div className="grid grid-cols-8 px-3 py-3">
            <Image
              src="/images/userprofile-01.webp"
              alt=""
              width={50}
              height={50}
              className="mt-3"
            />
            <div className="col-span-7 px-5 mt-2 text-xl font-bold text-white">
              {groupList.name}
              <div className="badge ml-2 text-xs badge-outline p-2">
                เข้าร่วมแล้ว <MdVerified className=" ml-1" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
