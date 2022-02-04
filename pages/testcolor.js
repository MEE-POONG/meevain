import React, { useState } from "react";
import InputColor from 'react-input-color';

const groupState = {
    name: "",
    color: "",
  };
//   const red = "#faa";
// const bule = "#ffff";

export default function Testcolor() {
    const [formCreateGroup, setFormCreateGroup] = useState(groupState);
  return (
    <div>
        <form  >
        <InputColor onChange={(e) =>
          setFormCreateGroup({
            ...formCreateGroup,
            color: e.target.value,
          })
        }
        id="color" />
        {/* <select
        className=" border shadow-lg rounded-lg  px-4 py-2 flex justify-between"
        onChange={(e) =>
          setFormCreateGroup({
            ...formCreateGroup,
            color: e.target.value,
          })
        }
        id="color"
      >
        <option
          className="bg-red-600 text-white shadow-lg rounded-full p-3 hover:ring "
          value={red}
        ></option>
        <option
          className="bg-yellow-600 text-white shadow-lg rounded-full p-3 hover:ring"
          value={bule}
        ></option>
        <option className="bg-green-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
        <option className="bg-blue-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
        <option className="bg-sky-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
        <option className="bg-cyan-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
        <option className="bg-orange-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
      </select> */}
        </form>
      
    </div>
  );
}
