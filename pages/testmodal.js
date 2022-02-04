import React, { useState } from "react";

const initialState = [
  {
    person: "group",
    age: 555,
  },
];

const green = "#39D1B4";
const yellow = "#FFD712";

function Person({ person, onClick, color, index }) {
  return (
    <>
      <h3>{person.person}</h3>
      <h3>{person.age}</h3>
      <button
        style={{ backgroundColor: color }}
        color={color}
        name={person.person}
        onClick={onClick}
        index={index}
      >
        Change color
      </button>
      <div className="m-2">
        <div className=" border shadow-lg rounded-lg  px-4 py-2 flex justify-between">
          <button
            className="bg-yellow-600 text-white shadow-lg rounded-full p-3 hover:ring"
            type="button"
          ></button>
          <button
            className="bg-green-600 text-white shadow-lg rounded-full p-3 hover:ring"
            type="button"
          ></button>
        </div>
      </div>
      {index}
    </>
  );
}

export default function App() {
  const [person] = useState(initialState);
  const [buttonColor, setButtonColor] = useState({ 0: green, 1: green });

  function handleColorChange(e, i) {
    console.log(i);
    const button = e.target.style.backgroundColor;
    const newButton = e.target.style.backgroundColor;

    const newColor = buttonColor[i] === green ? yellow : green;
    const newState = { ...buttonColor, [i]: newColor };
    setButtonColor(newState);
  }

  return (
    <div className="">
      {person.map((per, i) => {
        return (
          <Person
            color={buttonColor[i]}
            key={i}
            index={i}
            onClick={(e) => handleColorChange(e, i)}
            person={per}
          />
        );
      })}
      
    </div>
  );
}
